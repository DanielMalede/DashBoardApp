const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
require('./DB')
const path = require('path');
const passport = require('passport');
require('./config/passport')(passport);

// const usersRouter = require('./routes/users-router')
const productRouter = require('./routes/product-router')
const registersUsersRouter = require('./routes/registersUser-router')

app.use(passport.initialize())
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/users',registersUsersRouter)
app.use('/products',productRouter)
// app.use('/users',usersRouter)
app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`server is ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}