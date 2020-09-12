const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router=require('./Routers/person')
const connectDB = require("./config/conectdb");

app.use(express.json())
connectDB()
app.use("/persons",Router)


app.listen(5000, function(err) {
 return err ? console.log({err}) : console.log("Server is running on Port: " + 5000);
});
 
  




/*const data = [
    { name: 'Meeva', age: 30, favoriteFoods: ['Fettuccine Alfredo', 'Sushi', 'Quiche'] },
    { name: 'Leonardo', age: 44, favoriteFoods: ['Pasta', 'Cheeseburgers', 'French Fries'] },
  ];
   Router.post(("/")function(req, res) {
    persons.create(data, (err, res)=> {
      if (err) {
        res.send(err);
      } else {
        res.send(res);
      }
    });
  });
  router.route("/findPersonByName").get(function(req, res) {
    persons.find({name:'Meeva'}, function(err,data) {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
        console.log(res.data)

      }
     
    });
  });
 
  router.route("/findOneByFood").get(function(req, res) {
    persons.findOne({"favoriteFoods": ['Fettuccine Alfredo', 'Sushi', 'Quiche']}, function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
        console.log(res.data)

      }
     
    });
  });*/