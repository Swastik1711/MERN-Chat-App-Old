const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");
const connectToMongoDB = require("./db/connectToMongoDB.js");
const { app, server } = require("./socket/socket.js");


const PORT = process.env.PORT || 5000;


dotenv.config();
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//     res.send("Hello Swastik");
// })

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


server.listen(PORT, () => {
  connectToMongoDB();
    console.log(`server running on port ${PORT}`);
})

/* mongodb Atlas 
Project Name : MERN Chat Application
Username : swastikkumarpadhee
Password : 1oruVV1XUcX1ioxf

*/