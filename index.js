const express = require('express')

//Initialize express app
const app = express();
const mongoose = require('mongoose')
const Address = require('./models/Address')
const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({extended: false}))
//app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.json());



// mongoose.connect('mongodb://root:example@mongo:27017/AddressBook', {
mongoose.connect('mongodb://mongo/AddressBook', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log("errorDario")
 console.log(error)
})

// app.METHOD(PATH, HANDLER)

// Adding a User to AddressBook
app.post('/', (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let place = req.body.place;
console.log(name);
console.log(email);
console.log(phone);
console.log(place);

   let newAddress = new Address({
     name: name,
     email: email,
     phone: phone,
     place: place
    })


   newAddress.save().then((address) => {
     console.log("it is now save!");
     res.send(address)
    }).catch((err) => {
     console.log(err)
    })
   })

   // Reading a Uder from AddressBook
app.get('/:id', (req, res) =>{
    Address.findById(req.params.id, (err, user) =>{
     res.send(user)
    })
   })

//Initialize the sever
app.listen(3000, () => {
  console.log('sever listening on port:3000');
});
