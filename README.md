# Product API

A RESTful API built with Node.js, Express, and MongoDB for managing product inventory with advanced querying capabilities.

## Features

- **CRUD Operations**: Create, read, update, and delete products
- **Advanced Filtering**: Filter products by category and price range
- **Sorting**: Sort products by price (ascending/descending)
- **Pagination**: Paginate results with customizable page size
- **Data Validation**: Schema validation using Mongoose
- **Error Handling**: Comprehensive error handling with appropriate status codes

## Product Schema

```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required, min: 0.01),
  category: String (required),
  inStock: Boolean (required),
  tags: [String],
  createdAt: Date (default: Date.now)
}
```

## API Endpoints

### Create a Product
**POST** `/api/products`

**Body:**
```json
{
  "name": "Laptop",
  "description": "High-performance laptop",
  "price": 999.99,
  "category": "Electronics",
  "inStock": true,
  "tags": ["tech", "computers"]
}
```

**Response:** `201 Created`

---

### Get All Products (with Advanced Querying)
**GET** `/api/products`

**Query Parameters:**
- `category` - Filter by category
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `sortBy` - Sort by `price_asc` or `price_desc`
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)

**Examples:**
```
GET /api/products?category=Electronics
GET /api/products?minPrice=10&maxPrice=100
GET /api/products?sortBy=price_desc&page=2&limit=5
GET /api/products?category=Electronics&minPrice=50&sortBy=price_asc
```

**Response:** `200 OK`
```json
{
  "products": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalProducts": 47,
    "limit": 10
  }
}
```

---

### Get Product by ID
**GET** `/api/products/:id`

**Response:** `200 OK` or `404 Not Found`

---

### Update a Product
**PUT** `/api/products/:id`

**Body:**
```json
{
  "price": 899.99,
  "inStock": false
}
```

**Response:** `200 OK` or `404 Not Found`

---

### Delete a Product
**DELETE** `/api/products/:id`

**Response:** `200 OK` or `404 Not Found`

## Project Structure

```
ProductAPI/
├── controllers/
│   └── productController.js    # Business logic
├── db/
│   └── connection.js            # MongoDB connection
├── models/
│   └── Product.js               # Product schema
├── routes/
│   └── productRoutes.js         # API routes
├── server.js                    # Entry point
└── package.json
```

## Error Handling

All endpoints include proper error handling:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors)
- `404` - Not Found
- `500` - Server Error
