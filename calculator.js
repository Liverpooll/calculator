let str = ''

for (let i = 0; i < 9; i++) {
document.querySelectorAll('.num')[i].addEventListener('click', function() {
  document.querySelector('.screen1').innerHTML = i + 1;

  str = str + (i+1)
  document.querySelector('.screen1').innerHTML = str;

});
}

function logic() {
  let last_word = str.charAt(str.length-1);
  return parseInt(last_word);
}
let last_check = logic();


document.querySelector('.clear').addEventListener('click', function (){
  str = '';
  document.querySelector('.screen1').innerHTML = str;

})

document.querySelector('.delete').addEventListener('click', function (){
  str = str.slice(0, -1);
  document.querySelector('.screen1').innerHTML = str;
})

document.querySelector('.dot').addEventListener('click', function (){
  if (last_check != NaN){
    str = str + '.';
    document.querySelector('.screen1').innerHTML = str;
  }
})


document.querySelector('.per').addEventListener('click', function (){
  str = str + '%';
  document.querySelector('.screen1').innerHTML = str;
})

document.querySelector('.divide').addEventListener('click', function (){
  str = str + '/';
  document.querySelector('.screen1').innerHTML = str;
})

document.querySelector('.multiple').addEventListener('click', function (){
  str = str + '*';
  document.querySelector('.screen1').innerHTML = str;
})

document.querySelector('.plus').addEventListener('click', function (){
  str = str + '+';
  document.querySelector('.screen1').innerHTML = str;
})

document.querySelector('.minus').addEventListener('click', function (){
  str = str + '-';
  document.querySelector('.screen1').innerHTML = str;
})

document.querySelector('.equal').addEventListener('click', function (){
  str = str + '=';
  document.querySelector('.screen1').innerHTML = str;
})

