# Product Management Dashboard (MERN)

A full-stack **Product CRUD Dashboard** built using the MERN stack.
Users can add, edit, delete, search, sort, paginate products, and upload product images using Cloudinary.

---

## Features

* Add new products (name, price, description, image)
* Edit product details (inline editing)
* Delete products
* Upload product images (Cloudinary integration)
* Search products by name
* Sort products by price or created date
* Pagination support
* Responsive dashboard UI

---

## Tech Stack

**Frontend**

* React.js
* Bootstrap
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* Cloudinary (Image Storage)
* Multer (File Upload)

---

## Project Structure

```
product-dashboard
│
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   └── public
│
└── README.md
```

---

## Backend Setup

1. Navigate to backend folder

```bash
cd backend
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file

```
MONGO_URI=your_mongodb_connection
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

4. Run backend

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

1. Navigate to frontend folder

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Start application

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## Deployment

**Frontend:** Netlify
**Backend:** Render

Update frontend API URL to deployed backend URL before deployment.

---

## Demo

Live Demo: https://6986071a6388e923d68cf8b7--product-dashboard-rm.netlify.app

---

## Author

Roshan Madhe

---
