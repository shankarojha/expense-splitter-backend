const mongoose = require('mongoose')

let expenseSchema = new mongoose.Schema({

    ExpenseId:{
        type:String,
        default:'',
        index:true,
        unique:true
    },

    createdBy:{
        type:String,
        required:true
    },

    paidBy:{
        type:String,
        default:''
    },

    debtors: [{email:String,
    paid:Number
    }],

    amount:{
        type:Number
    },

    createdOn:{
        type:Date,
        default:Date.now()
    },

    modifiedOn:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Expense',expenseSchema)