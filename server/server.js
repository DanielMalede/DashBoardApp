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
const infoPageRouter = require('./routes/infoPages-router')
const ordersRouter = require('./routes/orders-router')
const financialSummaryRouter = require('./routes/financialSummaryModel-router')
const usersRouter = require('./routes/users-router')
const orderComingRouter =require('./routes/ordersComing-router')

app.use(passport.initialize())
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/ordersComing',orderComingRouter)
app.use('/users',usersRouter)
app.use('/products',productRouter)
app.use('/financialSummary',financialSummaryRouter)
app.use('/infoPages',infoPageRouter)
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