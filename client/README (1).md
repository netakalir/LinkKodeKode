Project title: LinkKodeKode

This project combines a **React** (with TSX and CSS) frontend and an **Express (JavaScript)** backend.  
The connection between client and server is done through **REST API requests**.

The project simulates a small-scale version of the social network **LinkedIn (LI)**.  
It allows users to:
- Create posts  
- Read posts  
 

<!-- All actions require **user authentication** and a valid **token**.   -->

The implementation emphasizes:
- TypeScript usage  
- Responsiveness  
- Accessibility  

---

##  Installation

Clone the repository and install dependencies for both server and client.

Server (Express):
cd server
npm install

Client (React) :
cd client
npm install
---

### run the project:
Server (Express):
cd server
nmp start

Client (React) :
cd client 
npm run dev
---
####  Api routes:
GET    /api/getPost/:id    -> fetch post by id
GET    /api/getAllPost       -> fetch all posts
POST   /api/createPost      -> create a new post

