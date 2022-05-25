const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Emp = new Schema({


    Emp_name: {
        type: String
    },

    Address: {
        type: String
    },

    Salary: {
        type: String
    },

    Designation: {
        type: String
    },

    Email: {
        type: String
    },

    Phone_No: {
        type: String
    }
}, {
    collection: 'Employee'
})
module.exports = mongoose.model('Employee', Emp)