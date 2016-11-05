'use strict';

var Show = require('./show.js');

var shows =  ['seed play 1',
               'seed play 2',
               'seed play 3'
];

shows.forEach(function(show, index){
  Show.find({'play':show},function(err,shows){
   if (!err && !shows.length) {
     Show.create({completed: false, play:show});
   };

 });
});
