//require express
const express = require('express')

//Require ConnectDB
const connectDB = require('./config/connectDB')
const cors=require("cors");

//Require Router
const userRoutes = require('./routes/api/userRoutes');
const profile = require('./routes/api/profile');
const adminRoutes = require("./routes/api/adminRoutes");
const course = require("./routes/api/course");
const chapitre = require("./routes/api/chapitre");
const formation = require("./routes/api/formation");
const certificate = require ("./routes/api/certificate")
const message = require ("./routes/api/message")
//init express
const app = express()

//App level middelware
app.use(express.json());
app.use(cors());


//connect DB 
connectDB();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

//Use Route
//app.use('/api/messages',message);
app.use('/api/users',userRoutes);
//app.use('/api/messages',userRoutes);
app.use('/api/profiles',profile);
app.use('/api/gestionnaires',adminRoutes);
app.use('/api/Formateurs/',adminRoutes);
app.use('/api/Students',adminRoutes);
app.use('/api/Admins',adminRoutes);
//app.use('/api/users',adminRoutes);
app.use('/api/messages',message);


app.use('/api/courses',course);
app.use('/api/chapitres',chapitre);
// app.use('/api/chapitres',isAuth,chapitre);

app.use('/api/formations',formation);
app.use('/api/certificates',certificate);


//Create Port 
const port = 5000;

//Launch server
app.listen(port , (error)=>
error ?
 console.log(error)
:console.log(`The server is running on port ${port}`));



