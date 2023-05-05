console.log('Hello JS !!');

let colorBtn = document.querySelector('.addTasks button');

let x = colorBtn.innerText;
switch(x){
  case 'personal' :
      colorBtn.style.backgroundColor = "green";
      console.log('personal');
    break;
  case 'work' :
    colorBtn.style.backgroundColor = "blue";
    console.log('work');
    break;
  case 'school' :
    colorBtn.style.backgroundColor = "orangered";
    console.log('school');
      break;
  case 'cleaning' :
    colorBtn.style.backgroundColor = "tomato";
    console.log('cleaning');
      break;
  case 'other' :
    colorBtn.style.backgroundColor = "olive";
    console.log('other');
      break;
  default : 
    console.log('default');
}


console.log('x: ',x);

console.log('**End**');