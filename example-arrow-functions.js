var names = ['Javier','Miguel','Luis'];

names.forEach(
  function(name){
    console.log('forEach',name);
  }
);

names.forEach((name) => {
  console.log('arrow func',name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('VICTORIA'));

var person = {
  name: 'LUIS',
  greet: function(){
    names.forEach((name) =>{
      //by using arrow functions we do not loose the reference to 'this'
      console.log(this.name+' says hi to '+name);
    });
  }
}

person.greet();

function add (a,b){
  return a+b;
}

console.log(add(1,4));
console.log(add(3,4));

var addStatement = (a,b) => {
  return a+b
};

var addExpression = (a,b) => a+b;

console.log(addStatement(2,2));
console.log(addExpression(6,5));
