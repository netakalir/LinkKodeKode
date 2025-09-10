Project title: LinkKodeKode

This project combines a **React** (with TSX and CSS) frontend and an **Express (JavaScript)** backend.  
The connection between client and server is done through **REST API requests**.

The project simulates a small-scale version of the social network **LinkedIn (LI)**.  
It allows users to:
- Create posts  
- Read posts  
 

get all post & create post require **user authentication** and a valid **token**.  

The implementation emphasizes:
- TypeScript usage  
- Responsiveness  

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
GET    /LinkKodeKode/getPost/:id    -> fetch post by id
GET    /LinkKodeKode/getAllPost       -> fetch all posts
POST   /LinkKodeKode/createPost      -> create a new post
POST   /LinkKodeKode/login          -> login user
POST   /LinkKodeKode/register       -> register a new user


##### test server:
run :
node --test
