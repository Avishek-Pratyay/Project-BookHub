


# 📚 Project Information (BookHub)

## 🎯 Problem Solved

BookHub solves the difficulty of managing and accessing books efficiently by providing a centralized digital library platform. Users can browse books, search by title, filter by category, view detailed information, and borrow books through a smooth and modern web interface.

---

## 👥 Target Users

* 🎓 Students
* 📖 Book Enthusiasts
* 🔬 Researchers
* 👨‍🏫 Teachers & Educators
* 🏛️ Library Members
* 🌍 General Readers

---

## 🚀 Frontend Deployment

* ▲ Vercel
* 🌐 Live URL
🔗 https://project-book-hub.vercel.app 

---

## ⚙️ Backend Deployment

* ⚡ Next.js API Routes (Integrated Backend)

---

## 🗄️ Database

* 🍃 MongoDB (Atlas / Cloud Database)

---

## 🛡️ User Roles

### 👤 User

* Register an account
* Login / Logout
* Browse all books
* Search books by title
* Filter books by category
* View book details
* Borrow books
* View and update profile information

---

## 🔗 Server Repository

* 📦 Same repository (Full-stack Next.js project)

---

## 🔑 Demo Credentials

### 👤 User Account

* **Email:** `a@gmail.com`
* **Password:** `123456`


---

## 📡 API Endpoints (Next.js API Routes)

### 🔐 Authentication

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → User login
* `POST /api/auth/logout` → User logout
* `GET /api/auth/session` → Get current session

---

### 📚 Books

* `GET /api/books` → Get all books
* `GET /api/books/:id` → Get single book details
* `POST /api/books/borrow` → Borrow a book

---

### 👤 User Profile

* `GET /api/profile` → Get user profile
* `PATCH /api/profile` → Update profile information

---

## 🧪 Manual Test Cases

### 🔐 Authentication

* ✅ Register with valid data successfully creates account
* ✅ Login with correct credentials redirects user
* ✅ Login fails with invalid credentials
* ✅ Logout clears session successfully

---

### 📚 Book Features

* ✅ Books load correctly from database
* ✅ Search by title returns correct results
* ✅ Filter by category works properly
* ✅ Book details page opens successfully
* ✅ Borrow book shows success message

---

### 👤 Profile Features

* ✅ Profile loads after login
* ✅ Profile updates successfully
* ✅ Unauthorized users are redirected to login

---

## ⚠️ Known Limitations

* 🔄 No book return system implemented yet
* 👨‍💼 No admin dashboard for managing books/users
* ⭐ No rating or review system
* 📧 No email verification or password reset system
* 🔔 No notification system for due dates
* 📊 Basic analytics not implemented

---

## 🌟 Future Improvements

* 🔐 Improve authentication with BetterAuth full session handling
* 🌐 Add Google/GitHub OAuth login
* 👨‍💼 Build Admin Dashboard for full control
* 🔄 Add book return + borrowing history system
* ⭐ Add ratings and reviews
* 🔍 Advanced search + pagination
* 🔔 Email notifications for due dates
* 📱 Improve mobile responsiveness (PWA support)
* 📊 Analytics dashboard for admin
