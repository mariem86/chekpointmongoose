const express =require('express')
const Router = express.Router();
const Person= require('../models/Person')

//@ post persons
Router.post(('/'),(req,res)=>{
const{name,age,favoriteFoods}=req.body
let newPerson=new Person({name,age,favoriteFoods})
newPerson.save()
.then(persons=>res.send(persons))
.catch(err=>console.log(err))
})
//@create person
Router.post(("/creat"),(req, res)=> {
  var arrayOfPepole=req.body.arrayOfPepole
  Person.create(arrayOfPepole)
  .then(persons=>res.send(persons))
  .catch(err=>console.log(err))
  });
  //get all
Router.get(("/all"),(req,res)=>{
  Person.find()
  .then(persons=>res.send(persons))
.catch(err=>console.log(err))
})

 //@get persons byName
Router.get(("/byName/:name"),(req, res)=> {
  var name = req.params
    Person.find(name) 
    .then(persons=>res.send(persons))
    .catch(err=>console.log(err))
    });

  //@get /persons/:favoriteFoods
  Router.get(('/favoriteFoods/:food'), (req, res)=> {
const food = req.params.favoriteFoods
    Person.findOne({favoriteFoods:food})
   .then(persons=>res.send(persons))
    .catch(err=>console.log(err))
      })
     //@ get persons byId
 Router
 .get( ("/:_id"), (req, res)=> {
 var {_id}=req.params;
 Person.findById({_id})
  .then(persons=>res.send(persons))
 .catch(err=>console.log(err))
  })
//@findEditThenSave
Router.put(('/findSave/:_id'), (req, res)=> {
  var foodToAdd = 'hamburger';
  var {_id}=req.params;
   Person.findById({_id})
   Person.update({favoriteFoods: foodToAdd})
  
  .then(persons=>res.send(persons))
  .catch(err=>console.log(err))
         })
         //findAndUpdate
       Router.put(('/findAndUpdate'), (req, res)=> {
         var ageToSet = 20
            var name = req.params
           Person.findOneAndUpdate(name, {$set:{age:20}})
          .then(persons=>res.send(persons))
          .catch(err=>console.log(err))
                 })
       //removeById
       Router.delete(("/removepersons/:_id"), (req, res)=> {
        var {_id}=req.params;
        Person.findByIdAndRemove({_id})
        .then(persons=>res.send(persons))
        .catch(err=>console.log(err))
       })
       //removeManyPepole
       Router.delete(("/removeManyPeople") , (req, res)=> {
        var nameToRemove = "Mary";
      
        Person.remove({"name":nameToRemove})
        .then(persons=>res.send(persons))
        .catch(err=>console.log(err))
       })
      //queryChain
       Router.get('/searchperson/:food',(req, res) => {
        const {food} = req.params;
         Person.find({favoriteFoods:food}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
             err ? res.status(400).send(err):res.send(data);
             console.log(data);
         });
     });
     module.exports = Router;

