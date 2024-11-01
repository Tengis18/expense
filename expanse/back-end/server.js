import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});
app.get("/signup", async (req, res) => {
  const {email, password} = req.body;
  try{
    const existingUser = await sql `SELECT * FROM signup WHERE email = ${email}`;
    if (existingUser.length >0){
      return res.status(400).json({message: "User already exists"});
    }
    const newUser = await sql`
    INSERT INTO signup (email, password) 
    VALUES (${email}, ${password})
    RETURNING id, email`;
    res 
    .status(201)
    .json({massage: "User created successfully", user: newUser[0]});
  } catch (error) {
    res 
    .status(500)
    .json({massage: "Internal server error during create user" })
  }
}) 
 
app.get("/login", async (req, res) => {
  const {email, password} = req.body;
  try{
    const existingUser = await sql `SELECT * FROM login WHERE email = ${email}`;
    if (existingUser.length >0){
      return res.status(400).json({message: "password not match"});
    }
    if (user[0].password !== password) {
      return res.status(400).json({message: "password not match"}); 
     }
      res.status(200).json({message:"Login successful", user: user[0]});
  
  } catch (error) {
    res 
    .status(500)
    .json({massage: "Internal server error during login user" })
  }
})

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
