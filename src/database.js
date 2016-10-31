'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Myproject',function(err){
   if(err) {
     console.log('failed connecting to Mongodb!');
   } else{
     console.log('successfully connected to Mongodb!');
   }


}) ;
