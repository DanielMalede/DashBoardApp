const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
require('./DB')
const path = require('path');
const passport = require('passport');
require('./config/passport')(passport);

const productRouter = require('./routes/product-router')
const categoryRouter = require('./routes/category-router')
const infoPageRouter = require('./routes/infoPages-router')
const classesRouter = require('./routes/classes-router')
const ordersRouter = require('./routes/orders-router')

app.use(passport.initialize())
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/category',categoryRouter)
app.use('/products',productRouter)
app.use('/infoPages',infoPageRouter)
app.use('/classes',classesRouter)
app.use('/orders',ordersRouter)


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