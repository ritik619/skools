# School Management System - Pagination & Filtering API Documentation

## Overview

This document describes the pagination and filtering capabilities implemented across all endpoints in the school management system.

## Pagination Parameters

All list endpoints support the following pagination parameters:

### Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | number | 1 | Page number (1-based) |
| `limit` | number | 10 | Number of items per page (max 100) |
| `sortBy` | string | createdAt | Field to sort by |
| `sortOrder` | string | ASC | Sort order (ASC or DESC) |
| `search` | string | - | Search term for text fields |

### Example Pagination Request

```http
GET /api/v1/schools?page=1&limit=20&sortBy=name&sortOrder=ASC&search=high
```

### Pagination Response Format

```json
{
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## Filtering

Each entity supports specific filters based on their properties and relationships.

### School Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `cityId` | string | Filter by city ID |
| `stateId` | string | Filter by state ID |
| `countryId` | string | Filter by country ID |
| `isActive` | boolean | Filter by active status |
| `educationBoard` | string | Filter by education board |

### User Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `schoolId` | string | Filter by school ID |
| `roleType` | enum | Filter by user role type |
| `isActive` | boolean | Filter by active status |
| `isEmailVerified` | boolean | Filter by email verification status |
| `specialization` | string | Filter by specialization |

### User Role Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `userId` | string | Filter by user ID |
| `roleType` | enum | Filter by role type |
| `schoolId` | string | Filter by school ID |
| `organizationId` | string | Filter by organization ID |
| `isActive` | boolean | Filter by active status |
| `isPrimaryRole` | boolean | Filter by primary role status |

### User Relationship Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `superiorUserId` | string | Filter by superior user ID |
| `subordinateUserId` | string | Filter by subordinate user ID |
| `relationshipType` | enum | Filter by relationship type |
| `schoolId` | string | Filter by school ID |
| `gradeId` | string | Filter by grade ID |
| `sectionId` | string | Filter by section ID |
| `isActive` | boolean | Filter by active status |

### Grade Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `schoolId` | string | Filter by school ID |
| `isActive` | boolean | Filter by active status |
| `ageGroup` | string | Filter by age group |

### Section Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `gradeId` | string | Filter by grade ID |
| `schoolId` | string | Filter by school ID |
| `isActive` | boolean | Filter by active status |

### Room Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `schoolId` | string | Filter by school ID |
| `roomType` | string | Filter by room type |
| `floor` | string | Filter by floor |
| `building` | string | Filter by building |
| `isActive` | boolean | Filter by active status |

### Academic Year Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `schoolId` | string | Filter by school ID |
| `isActive` | boolean | Filter by active status |
| `isCurrent` | boolean | Filter by current year status |

### Document Filters

| Parameter | Type | Description |
|-----------|------|-------------|
| `schoolId` | string | Filter by school ID |
| `category` | string | Filter by document category |
| `documentType` | string | Filter by document type |
| `isActive` | boolean | Filter by active status |

## API Endpoints with Pagination & Filtering

### Schools

```http
GET /api/v1/schools
```

**Query Parameters:**
- Pagination: `page`, `limit`, `sortBy`, `sortOrder`, `search`
- Filters: `cityId`, `stateId`, `countryId`, `isActive`, `educationBoard`

**Example:**
```http
GET /api/v1/schools?page=1&limit=10&sortBy=name&cityId=123&isActive=true
```

### User Roles

```http
GET /api/v1/user-roles
```

**Query Parameters:**
- Pagination: `page`, `limit`, `sortBy`, `sortOrder`, `search`
- Filters: `userId`, `roleType`, `schoolId`, `organizationId`, `isActive`, `isPrimaryRole`

**Additional Endpoints:**
```http
GET /api/v1/user-roles/user/{userId}
GET /api/v1/user-roles/school/{schoolId}
```

### User Role Hierarchies

```http
GET /api/v1/user-role-hierarchies
```

**Query Parameters:**
- Pagination: `page`, `limit`, `sortBy`, `sortOrder`, `search`
- Filters: `superiorRole`, `subordinateRole`, `allowedRelationshipType`, `organizationLevel`, `isActive`

**Additional Endpoints:**
```http
GET /api/v1/user-role-hierarchies/superior/{superiorRole}
GET /api/v1/user-role-hierarchies/subordinate/{subordinateRole}
GET /api/v1/user-role-hierarchies/organization-level/{organizationLevel}
```

### User Relationships

```http
GET /api/v1/user-relationships
```

**Query Parameters:**
- Pagination: `page`, `limit`, `sortBy`, `sortOrder`, `search`
- Filters: `superiorUserId`, `subordinateUserId`, `relationshipType`, `schoolId`, `gradeId`, `sectionId`, `isActive`

**Additional Endpoints:**
```http
GET /api/v1/user-relationships/superior/{superiorUserId}
GET /api/v1/user-relationships/subordinate/{subordinateUserId}
GET /api/v1/user-relationships/school/{schoolId}
```

### School Relationships

```http
GET /api/v1/schools/{id}/grades
GET /api/v1/schools/{id}/rooms
GET /api/v1/schools/{id}/academic-years
GET /api/v1/schools/{id}/users
```

**Query Parameters:**
- Pagination: `page`, `limit`, `sortBy`, `sortOrder`, `search`

## Search Functionality

The search parameter performs a case-insensitive search across multiple text fields:

- **Schools**: name, code, address, educationBoard
- **Users**: username, email, firstName, lastName
- **Grades**: name, code, ageGroup
- **Sections**: name, code, description
- **Rooms**: name, code, description, roomType
- **Academic Years**: name, code
- **Documents**: name, code, description, category

## Sorting

Available sort fields vary by entity:

- **Schools**: name, code, createdAt, updatedAt
- **Users**: username, email, firstName, lastName, createdAt
- **Grades**: name, code, level, createdAt
- **Sections**: name, code, createdAt
- **Rooms**: name, code, roomType, createdAt
- **Academic Years**: name, code, startDate, endDate, createdAt
- **User Roles**: roleType, isPrimaryRole, createdAt
- **User Relationships**: relationshipType, createdAt

## Examples

### Get Schools with Filters and Pagination

```bash
curl -X GET "http://localhost:3000/api/v1/schools?page=1&limit=10&sortBy=name&cityId=123&isActive=true" \
  -H "Authorization: Bearer <your-token>"
```

### Get User Roles for a Specific User

```bash
curl -X GET "http://localhost:3000/api/v1/user-roles/user/456?page=1&limit=5" \
  -H "Authorization: Bearer <your-token>"
```

### Search Schools by Name

```bash
curl -X GET "http://localhost:3000/api/v1/schools?search=high&page=1&limit=20" \
  -H "Authorization: Bearer <your-token>"
```

### Get User Relationships by School

```bash
curl -X GET "http://localhost:3000/api/v1/user-relationships/school/789?page=1&limit=15&relationshipType=TEACHES" \
  -H "Authorization: Bearer <your-token>"
```

### Get Grades for a School with Pagination

```bash
curl -X GET "http://localhost:3000/api/v1/schools/123/grades?page=1&limit=10&sortBy=level&sortOrder=ASC" \
  -H "Authorization: Bearer <your-token>"
```

## Error Handling

### Invalid Pagination Parameters

```json
{
  "statusCode": 400,
  "message": [
    "page must be a positive number",
    "limit must not be greater than 100"
  ],
  "error": "Bad Request"
}
```

### No Results

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 0,
    "totalPages": 0,
    "hasNext": false,
    "hasPrev": false
  }
}
```

## Performance Considerations

1. **Indexing**: Ensure database indexes are created on frequently filtered fields
2. **Limit**: Maximum limit is 100 items per page to prevent performance issues
3. **Search**: Search is performed using ILIKE for case-insensitive matching
4. **Relationships**: Use specific relationship endpoints for better performance

## Best Practices

1. **Use Specific Filters**: Use entity-specific filters instead of search when possible
2. **Limit Results**: Use appropriate page sizes (10-50 items typically)
3. **Sort Efficiently**: Sort by indexed fields for better performance
4. **Cache Results**: Consider caching frequently accessed paginated results
5. **Monitor Performance**: Track query execution times for optimization 