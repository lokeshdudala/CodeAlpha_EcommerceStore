# ShopEasy - E-Commerce Store

## Project Overview

ShopEasy is a full-stack E-Commerce Web Application developed as part of the CodeAlpha Internship Program. The application allows users to register, log in, browse products, search products, add products to a shopping cart, place orders, and view order history.

The project is built using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB Atlas, JWT Authentication, and bcryptjs.

## Features

### User Authentication

* User Registration
* User Login
* JWT Authentication
* Logout Functionality
* Protected Pages

### Product Management

* Product Listing
* Product Details Page
* Product Search Functionality

### Shopping Cart

* Add Products to Cart
* Remove Products from Cart
* Cart Item Count
* Total Price Calculation

### Order Management

* Place Orders
* Store Orders in MongoDB Atlas
* View Order History

### User Interface

* Responsive Design
* Navigation Bar
* Landing Page
* Product Cards
* Footer Section

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JSON Web Token (JWT)
* bcryptjs

### Tools

* VS Code
* Git & GitHub
* MongoDB Atlas
* Postman

## Project Structure

```text
ShopEasy/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── orderController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── products.html
│   ├── product-details.html
│   ├── cart.html
│   ├── orders.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── auth.js
│       ├── products.js
│       ├── productDetails.js
│       ├── cart.js
│       ├── orders.js
│       └── logout.js
│
└── README.md
```

## Installation and Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
```

### Create .env File

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

### Start Server

```bash
npm run dev
```

### Run Frontend

Open the frontend folder in VS Code and run using Live Server.

## Application Flow

```text
Landing Page
    ↓
Login / Register
    ↓
Products Page
    ↓
Product Details
    ↓
Add To Cart
    ↓
Cart
    ↓
Place Order
    ↓
Order History
```

## Database Collections

### Users

Stores:

* Name
* Email
* Password (Hashed)

### Products

Stores:

* Product Name
* Description
* Price
* Image URL

### Orders

Stores:

* Product IDs
* Quantity
* Total Amount
* Order Date

## Screenshots

Add screenshots of:

* Landing Page
* Login Page
* Register Page
* Products Page
* Product Details Page
* Cart Page
* Order History Page
* MongoDB Atlas Collections

## Future Enhancements

* Payment Gateway Integration
* Wishlist Feature
* User Profile Page
* Product Categories
* Admin Dashboard
* Product Reviews and Ratings
* Email Notifications

## Internship Task

CodeAlpha Internship

Task 1: E-Commerce Store

Status: Completed

## Author

Dudala Venkata Lokesh

B.Tech Computer Science and Engineering

Lakireddy Bali Reddy College of Engineering (LBRCE)

GitHub: https://github.com/lokeshdudala
