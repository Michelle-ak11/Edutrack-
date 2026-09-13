const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true
    },
    RegNo:{
        type:Number,
        unique:true,
        required:true
    },

    Age:{
        type:Number,
        required:true
    },
  Course:{
    type:String,
    required:true
},
// Gender:{
//     type:String,
//     required:true
// },


});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;


