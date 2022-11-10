let button = document.getElementById('button');

button.addEventListener('click', function(){
let weight = document.getElementById('weight').value;
let height = document.getElementById('height').value;
let finalBmi =(weight / (height * height));
finalBmi = document.getElementById('result');


})