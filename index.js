const express = require('express')

//Initialize express app
const app = express();

const mongoose = require('mongoose')

const Address = require('./models/Address')

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

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

    name = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    place = req.body.place

   let newAddress = new Address({
     name: name,
     email: email,
     phone: phone,
     place: place
    })


    
   newAddress.save().then((address) => {
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

//    // Updating the User
// app.post('/update/:id', (req, res) => {
//     let address = {}
//     if (req.body.name) address.name = req.body.name
//     if (req.body.email) address.email = req.body.email
//     if (req.body.phone) address.phone = req.body.phone
//     if (req.body.place) address.place = req.body.place
//    address = { $set: address }
//    Address.update({_id: req.params.id}, address).then(() => {
//      res.send(address)
//     }).catch((err) => {
//      console.log(error)
//     })
//    })

// // Deleting the User from AddressBook
// app.delete('/delete/:id', (req, res) => {
//     Address.remove(_id: req.params.id).then(() => {
//      res.send('user deleted')
//     }).catch((err) => {
//      console.log(error)
//     })
//    })

//Initialize the sever
app.listen(3000, () => {
  console.log('sever listening on port:3000');
});
