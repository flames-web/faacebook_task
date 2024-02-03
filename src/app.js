const express = require('express');
const app = express();
const routes = require('./routes/pptr');
const AppError = require('../src/services/AppError')



app.use(express.urlencoded({extended : true}));
app.use('/',routes);


app.all('*',(req,res,next) => {
  const error = new AppError('Page Not Found',400);
  next(error);

})

app.use((err,req,res,next) => {
  const { status = 500 } =  AppError;

  const message = err.message || 'Oh something went wrong';
  res.status(status).json({
    status,
    message,
  });
})


app.listen(3000, () => {
  console.log('App Listening on port 3000')
});