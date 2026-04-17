# Simple API Deployment

## Project Description
This is a minimal REST API built with Node.js and Express.  
It was deployed on an AWS EC2 instance using Nginx as a reverse proxy.  
The goal of this project is to demonstrate basic backend API development and DevOps deployment skills.

---

## Live URL
http://44.212.25.244

---

## ⚙️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Mkaydevops/simple-api.git
cd simple-api
Install dependencies
npm install
3. Start the server
node app.js

The server runs on:

http://localhost:3000
📡 API Endpoints
GET /

Returns API status

{
  "message": "API is running"
}
GET /health

Returns system health status

{
  "message": "healthy"
}
GET /me

Returns user information

{
  "name": "Mkpoikana Udoekong",
  "email": "mekpenyong32@gmail.com",
  "github": "https://github.com/Mkaydevops"
}
