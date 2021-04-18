'use strict';

let date = new Date();
document.getElementById('date').innerHTML = date.getHours() + ':' + date.getMinutes() + '/ ' + date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear();
document.getElementById('date').style.height = 'auto';
document.getElementById('date').style.fontSize = '18px'

