const mongoose = require('mongoose');

// mongoose.connect('mongodb://root:example@mongo:27017/AddressBook', {
//   useNewUrlParser: true, useUnifiedTopology: true
// }).then(() => {
//  console.log('connected to db')
// }).catch((error) => {
//  console.log(error)
// })


// Schema for AddressBook
const addressSchema = mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    email: {
     type: String,
     required: true
    },
    phone: {
     type: Number,
     required: true
    },
    place: {
     type: String,
     required: true
    }
   })
   //Creating the collection Address
   const Address = mongoose.model('Address', addressSchema)

module.exports = Address;
