//constructor
var createPoken = function(name, health, defense, attack){
  this.name = name;
  this.health = health;
  this.defense = defense;
  this.attack = attack;
}



//
var charmander = new createPoken(
  'Charmander',
  100,
  20,
  20,
);

console.log (charmander);

var squirtle = new createPoken(
  'Squirtle',
  100,
  40,
  10,
  
);

console.log (squirtle);

var latios = new createPoken(
  'Latios',
  90,
  30,
  10,
);

console.log (latios);

var list = document.getElementById('list');
var item = document.createElement('li');
list.appendChild(item);
item.textContent = ('Name: ' + this.name);
list.appendChild(item);

var list = document.getElementById('list');
var item = document.createElement('li');
list.appendChild(item);
item.textContent = squirtle.attack;

var list = document.getElementById('list');
var item = document.createElement('li');
list.appendChild(item);
list.appendChild(item);
item.textContent = squirtle.health;

var list = document.getElementById('list');
var item = document.createElement('li');
list.appendChild(item);
item.textContent = squirtle.defense;
list.appendChild(item);


