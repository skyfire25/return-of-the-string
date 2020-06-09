/*******************
 * YOUR CODE HERE! *
 *******************/
function yell(str){
return str + '!'
}

function getFirstCharacter(str){
return str.charAt()
}

function getLastCharacter(str){
return str.slice(-1)
}

function getOneCharacter(str, i){
  return str[i];
}

function getTwoCharacters(str, index1, index2){
  return str[index1] + str[index2]
}

function makeCapitalized(str){
  return str.toUpperCase()
}

function yellLouder(str){
  return str.toUpperCase()+ '!!!'
}

function getInitials(name){
  const secondInitialIndex = name.indexOf(' ') +1;
  return name[0] + '.' + name[secondInitialIndex] + '.'
} 



/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
