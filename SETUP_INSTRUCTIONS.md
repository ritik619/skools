# School Management System Setup Instructions

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd skools
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Configuration**

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=skools

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_random
JWT_REFRESH_SECRET=your_super_secret_jwt_refresh_key_here_make_it_long_and_random

# Application Configuration
NODE_ENV=development
PORT=3000
```

4. **Database Setup**

Create a PostgreSQL database named `skools`:

```sql
CREATE DATABASE skools;
```

5. **Run the Application**

Development mode:
```bash
npm run start:dev
```

Production mode:
```bash
npm run build
npm run start:prod
```

## API Endpoints

The API will be available at `http://localhost:3000/api/v1`

### Authentication Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/refresh` - Refresh access token
- `POST /auth/logout` - Logout user
- `GET /auth/profile` - Get user profile

### Protected Endpoints

All other endpoints require JWT authentication. Include the access token in the Authorization header:
```
Authorization: Bearer <access-token>
```

## Database Schema

The system includes the following main entities:

1. **Country** - Countries
2. **State** - States/Provinces within countries
3. **City** - Cities within states
4. **Organization** - Educational organizations
5. **School** - Individual schools
6. **AcademicYear** - Academic years for schools
7. **Grade** - Grade levels within schools
8. **Section** - Sections within grades
9. **Room** - Rooms within schools
10. **User** - System users (teachers, students, admins)
11. **DocumentTemplate** - Reusable document templates
12. **SchoolDocument** - School-specific documents

## Features Implemented

### Authentication & Authorization
- JWT-based authentication
- Access and refresh tokens
- Password hashing with bcrypt
- User registration and login
- Token refresh mechanism
- Logout functionality

### Data Validation
- Comprehensive DTOs with validation
- Input sanitization
- Type checking
- Required field validation

### Database Relationships
- Proper foreign key relationships
- Cascade operations
- Eager loading for related data
- UUID primary keys

### API Features
- RESTful API design
- Proper HTTP status codes
- Error handling
- CORS support
- Global validation pipes

### Security Features
- JWT token authentication
- Password hashing
- Input validation
- CORS configuration
- Environment variable management

## Testing the API

1. **Register a user:**
```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@school.com",
    "password": "password123",
    "firstName": "Admin",
    "lastName": "User"
  }'
```

2. **Login:**
```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

3. **Use the access token for protected endpoints:**
```bash
curl -X GET http://localhost:3000/api/v1/schools \
  -H "Authorization: Bearer <your-access-token>"
```

## Development

### Available Scripts

- `npm run start:dev` - Start in development mode with hot reload
- `npm run build` - Build the application
- `npm run start:prod` - Start in production mode
- `npm run test` - Run tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Project Structure

```
src/
├── auth/                 # Authentication module
├── user/                 # User management
├── country/              # Country management
├── state/                # State management
├── city/                 # City management
├── organization/         # Organization management
├── school/               # School management
├── academic-year/        # Academic year management
├── grade/                # Grade management
├── section/              # Section management
├── room/                 # Room management
├── document-template/    # Document template management
├── school-document/      # School document management
└── user-role/            # User role management
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env`
   - Verify database exists

2. **JWT Token Issues**
   - Ensure JWT_SECRET and JWT_REFRESH_SECRET are set
   - Check token expiration times
   - Verify token format in Authorization header

3. **Validation Errors**
   - Check request body format
   - Ensure all required fields are provided
   - Verify data types match DTO requirements

### Logs

Check the console output for detailed error messages and debugging information.

## Contributing

1. Follow the existing code structure
2. Add proper validation to DTOs
3. Include error handling
4. Write tests for new features
5. Update documentation

## License

This project is licensed under the MIT License. 