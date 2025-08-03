# Complete School Management System API Summary

## Overview

This document provides a comprehensive summary of all implemented APIs in the school management system, including JWT authentication, pagination, filtering, and relationship-based endpoints.

## Authentication Endpoints

### Base URL: `/api/v1/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register a new user | No |
| POST | `/login` | Login user | No |
| POST | `/refresh` | Refresh access token | No |
| POST | `/logout` | Logout user | Yes |
| GET | `/profile` | Get user profile | Yes |

## Core Entity APIs

### 1. Countries - `/api/v1/countries`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all countries with pagination & filters | Yes |
| POST | `/` | Create a new country | Yes |
| GET | `/:id` | Get country by ID | Yes |
| PATCH | `/:id` | Update country | Yes |
| DELETE | `/:id` | Delete country | Yes |

**Filters:** `isActive`, `currency`, `timezone`

### 2. States - `/api/v1/states`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all states with pagination & filters | Yes |
| GET | `/country/:countryId` | Get states by country | Yes |
| POST | `/` | Create a new state | Yes |
| GET | `/:id` | Get state by ID | Yes |
| PATCH | `/:id` | Update state | Yes |
| DELETE | `/:id` | Delete state | Yes |

**Filters:** `countryId`, `isActive`, `abbreviation`

### 3. Cities - `/api/v1/cities`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all cities with pagination & filters | Yes |
| GET | `/state/:stateId` | Get cities by state | Yes |
| POST | `/` | Create a new city | Yes |
| GET | `/:id` | Get city by ID | Yes |
| PATCH | `/:id` | Update city | Yes |
| DELETE | `/:id` | Delete city | Yes |

**Filters:** `stateId`, `countryId`, `isActive`, `postalCode`

### 4. Organizations - `/api/v1/organizations`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all organizations with pagination & filters | Yes |
| POST | `/` | Create a new organization | Yes |
| GET | `/:id` | Get organization by ID | Yes |
| PATCH | `/:id` | Update organization | Yes |
| DELETE | `/:id` | Delete organization | Yes |

**Filters:** `isActive`, `contactPerson`, `contactEmail`

### 5. Schools - `/api/v1/schools`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all schools with pagination & filters | Yes |
| POST | `/` | Create a new school | Yes |
| GET | `/:id` | Get school by ID | Yes |
| PATCH | `/:id` | Update school | Yes |
| DELETE | `/:id` | Delete school | Yes |

**Filters:** `cityId`, `stateId`, `countryId`, `isActive`, `educationBoard`

#### School Relationship Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/:id/grades` | Get grades for a school | Yes |
| GET | `/:id/rooms` | Get rooms for a school | Yes |
| GET | `/:id/academic-years` | Get academic years for a school | Yes |
| GET | `/:id/users` | Get users for a school | Yes |

### 6. Grades - `/api/v1/grades`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all grades with pagination & filters | Yes |
| GET | `/school/:schoolId` | Get grades by school | Yes |
| POST | `/` | Create a new grade | Yes |
| GET | `/:id` | Get grade by ID | Yes |
| PATCH | `/:id` | Update grade | Yes |
| DELETE | `/:id` | Delete grade | Yes |

**Filters:** `schoolId`, `isActive`, `ageGroup`

### 7. Sections - `/api/v1/sections`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all sections with pagination & filters | Yes |
| POST | `/` | Create a new section | Yes |
| GET | `/:id` | Get section by ID | Yes |
| PATCH | `/:id` | Update section | Yes |
| DELETE | `/:id` | Delete section | Yes |

**Filters:** `gradeId`, `schoolId`, `isActive`

### 8. Rooms - `/api/v1/rooms`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all rooms with pagination & filters | Yes |
| POST | `/` | Create a new room | Yes |
| GET | `/:id` | Get room by ID | Yes |
| PATCH | `/:id` | Update room | Yes |
| DELETE | `/:id` | Delete room | Yes |

**Filters:** `schoolId`, `roomType`, `floor`, `building`, `isActive`

### 9. Academic Years - `/api/v1/academic-years`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all academic years with pagination & filters | Yes |
| POST | `/` | Create a new academic year | Yes |
| GET | `/:id` | Get academic year by ID | Yes |
| PATCH | `/:id` | Update academic year | Yes |
| DELETE | `/:id` | Delete academic year | Yes |

**Filters:** `schoolId`, `isActive`, `isCurrent`

### 10. Users - `/api/v1/users`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all users with pagination & filters | Yes |
| POST | `/` | Create a new user | Yes |
| GET | `/:id` | Get user by ID | Yes |
| PATCH | `/:id` | Update user | Yes |
| DELETE | `/:id` | Delete user | Yes |

**Filters:** `schoolId`, `roleType`, `isActive`, `isEmailVerified`, `specialization`

## User Management APIs

### 11. User Roles - `/api/v1/user-roles`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all user roles with pagination & filters | Yes |
| GET | `/user/:userId` | Get roles for a specific user | Yes |
| GET | `/school/:schoolId` | Get roles for a specific school | Yes |
| POST | `/` | Create a new user role | Yes |
| GET | `/:id` | Get user role by ID | Yes |
| PATCH | `/:id` | Update user role | Yes |
| DELETE | `/:id` | Delete user role | Yes |

**Filters:** `userId`, `roleType`, `schoolId`, `organizationId`, `isActive`, `isPrimaryRole`

### 12. User Role Hierarchies - `/api/v1/user-role-hierarchies`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all role hierarchies with pagination & filters | Yes |
| GET | `/superior/:superiorRole` | Get hierarchies by superior role | Yes |
| GET | `/subordinate/:subordinateRole` | Get hierarchies by subordinate role | Yes |
| GET | `/organization-level/:organizationLevel` | Get hierarchies by organization level | Yes |
| POST | `/` | Create a new role hierarchy | Yes |
| GET | `/:id` | Get role hierarchy by ID | Yes |
| PATCH | `/:id` | Update role hierarchy | Yes |
| DELETE | `/:id` | Delete role hierarchy | Yes |

**Filters:** `superiorRole`, `subordinateRole`, `allowedRelationshipType`, `organizationLevel`, `isActive`

### 13. User Relationships - `/api/v1/user-relationships`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all user relationships with pagination & filters | Yes |
| GET | `/superior/:superiorUserId` | Get relationships by superior user | Yes |
| GET | `/subordinate/:subordinateUserId` | Get relationships by subordinate user | Yes |
| GET | `/school/:schoolId` | Get relationships by school | Yes |
| POST | `/` | Create a new user relationship | Yes |
| GET | `/:id` | Get user relationship by ID | Yes |
| PATCH | `/:id` | Update user relationship | Yes |
| DELETE | `/:id` | Delete user relationship | Yes |

**Filters:** `superiorUserId`, `subordinateUserId`, `relationshipType`, `schoolId`, `gradeId`, `sectionId`, `isActive`

## Document Management APIs

### 14. Document Templates - `/api/v1/document-templates`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all document templates with pagination & filters | Yes |
| POST | `/` | Create a new document template | Yes |
| GET | `/:id` | Get document template by ID | Yes |
| PATCH | `/:id` | Update document template | Yes |
| DELETE | `/:id` | Delete document template | Yes |

**Filters:** `category`, `templateType`, `isActive`

### 15. School Documents - `/api/v1/school-documents`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all school documents with pagination & filters | Yes |
| POST | `/` | Create a new school document | Yes |
| GET | `/:id` | Get school document by ID | Yes |
| PATCH | `/:id` | Update school document | Yes |
| DELETE | `/:id` | Delete school document | Yes |

**Filters:** `schoolId`, `category`, `documentType`, `isActive`, `templateId`

## Pagination Parameters

All list endpoints support the following pagination parameters:

- `page` (number, default: 1) - Page number
- `limit` (number, default: 10, max: 100) - Items per page
- `sortBy` (string) - Field to sort by
- `sortOrder` (string, default: 'ASC') - Sort order (ASC/DESC)
- `search` (string) - Search term for text fields

## Response Format

### Paginated Response
```json
{
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15,
    "hasNext": true,
    "hasPrev": false
  }
}
```

### Error Response
```json
{
  "statusCode": 400,
  "message": ["Validation error"],
  "error": "Bad Request"
}
```

## Authentication

All protected endpoints require JWT authentication. Include the access token in the Authorization header:

```
Authorization: Bearer <your-access-token>
```

## Example Usage

### Get Schools with Filters
```bash
curl -X GET "http://localhost:3000/api/v1/schools?page=1&limit=10&cityId=123&isActive=true" \
  -H "Authorization: Bearer <your-token>"
```

### Get User Roles for a School
```bash
curl -X GET "http://localhost:3000/api/v1/user-roles/school/456?page=1&limit=5" \
  -H "Authorization: Bearer <your-token>"
```

### Search Cities
```bash
curl -X GET "http://localhost:3000/api/v1/cities?search=New York&page=1&limit=20" \
  -H "Authorization: Bearer <your-token>"
```

## Features Implemented

✅ **JWT Authentication** - Complete authentication system with access/refresh tokens
✅ **Pagination** - All list endpoints support pagination with metadata
✅ **Filtering** - Entity-specific filters for efficient data retrieval
✅ **Search** - Text-based search across multiple fields
✅ **Sorting** - Configurable sorting by entity fields
✅ **Relationships** - Proper foreign key relationships with eager loading
✅ **Validation** - Comprehensive DTO validation with class-validator
✅ **Error Handling** - Proper HTTP status codes and error messages
✅ **Type Safety** - Full TypeScript support with proper types
✅ **Security** - JWT guards, input validation, and CORS protection

## Database Schema

The system includes the following entities with proper relationships:

1. **Country** → **State** → **City** → **School**
2. **Organization** → **Country**
3. **School** → **Grade** → **Section**
4. **School** → **Room**, **AcademicYear**, **User**
5. **User** → **UserRole**, **UserRelationship**
6. **DocumentTemplate** → **SchoolDocument**

All entities use UUID primary keys and include audit fields (createdAt, updatedAt). 