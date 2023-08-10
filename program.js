// function greet(name,age){

//     console.log("Hello " +" "+ name + age);
// }
// function Mo(number1,number2){
//     let result = number1 * number2;
//     return result;
    
// }
// let result = Mo(2,5);
// console.log(result);
// greet(" farshid",32);
// ////---------------------------------------->
// let athenticated = true;
// let bottonText = athenticated === true ? "Dashboard" : "Login";
// // console.log(bottonText);
// -------------------------------------->
// SWITH CASE __________________________>
// let role = "admin";

// switch(role){

//     case "guest" :
//         console.log("guest User");
//         break;
//     case "admin" :
//         console.log("admin User");   
//         break;
//         default:
//             console.log("unkown User");
// }
//---------------------------------------------
// for( let i = 0 ; i <50 ; i++)
// {
//         if (i % 2 == 1){ 
//             console.log(i);
//         }
      
// }
//----------------------------------------

// let i = 0;
// while(i < 10){

//     console.log(i);
//     i++; 

// } 

// let i = 0;

// do{

// console.log(i);
// i++;

// }while(i<11);


const person ={name:"Farshid", age: 30};
const colors =["Red","Green","Blue"];
// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
// }

// for(let index in colors){
// console.log(colors[index]);

// }

// for(let index of colors){
//     console.log(colors);
    
//     }
    
//------------------------------------------------>    
// let i = 0;

// while(i <= 10){
//     if(i==6){
//         i ++;
//         continue;
//     }
//     console.log(i);
//     i ++
// }
//------------------------------------------------>

// //Circle
// let circle={
//     radius : 1,
//     location :{
//         x:1,
//         y:1
//     },
//     isVisible : true,
//     draw : function(){
//         console.log("draw1");
//     }
// };


// camel notation :for type used : oneTwoThree

// //Factory function
// function createCircle(radius){
//     return {
//         radius,
//                 draw : function(){ console.log("draw")}
//     }
// }

// circle.draw();
// let circle1 = createCircle(1);
// let circle2 = createCircle(4);
// console.log(circle1);
// console.log(circle2);
///----------------------------------------------->


//Constructor Function     :for type used :pascal notation : OneTwoThree 

// function createCircle(radius){
//     return{
//         radius,
//         draw(){ console.log("draw");}
//     }
// }

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draaw")
//     }
//     return this;
// }
// const circle = new Circle(3);
// console.log(circle);


//--------------------------------------->


// const Circle = {
//     radius: 1
// }
// Circle.colors = "red";
// Circle.draw = function(){

// }

// // delete Circle.draw;
// console.log(Circle);

// let another = new Circle(3);
//--------------------------------------------------->

// function createCircle(radius){
//     return{
//         radius,
//         draw(){console.log("draw")
        
//     }
// }
// }
// const circle = createCircle(2);


// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draaaaaw");
//     }
// }

// const another = new Circle(3);


// let pageBanner = document.getElementById('page-banner');
// let titles = document.getElementsByClassName('title');
// let lis = document.getElementsByTagName('li')


// let qselector = document.querySelector('#page-banner');
// qselector = document.querySelectorAll('.title');
// qselector = document.querySelectorAll('li');
//  for(let element of lis){
//      console.log(element);
//  }
// qselector = document.querySelectorAll('#book-list li .name')[2]; // oon elementi ke mikhaym besh dastresi peyda konam
// qselector = document.querySelectorAll('#add-book a ')[0];
// console.log(qselector);



// let result;

// const list = document.querySelector('ul');
// const li = document.querySelector('li');

// result = list.children[1].children[0]; //tamame ajzaye in list agar be joze khasi bekhaym beresim ba [2 oder ...]
//result = list.children[1].children[0].textContent;Ya az .innerHtml//     baraye dastresi be content 
//result = list.firstElementChild; // baraye dastresi be avalin element  va baraye akharin lastElementchild
// result = list.childElementCount; // baraye fahmidane tedad farzandan
// result = li.parentElement; // baraye bedast avardane parent ya pedaresh


// console.log(result);


// const heading = document.createElement('h2');
// heading.className = 'Farshid';
// heading.id = "Parvizian"; // baraye set kardane id
// heading.setAttribute('Farshid',"Ntt"); // baraye ezafe kardane att ke avali esme dovomi value
// heading.className += ' fa'; // baraye ezafe kardane class
// heading.innerHTML = ' HEllO MR Farshid' // ezafe kardane Content 

//------------------------------------------
// heading.innerHTML = `
// <ul>                                             // 1
// <li>farshid</li>
// <li>Parvizian</li>
// </ul>
// `
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');

// li1.appendChild(document.createTextNode('Farshid'));
// li2.appendChild(document.createTextNode('Parvizian'));       //2
// ul.appendChild(li1);
// ul.appendChild(li2);
// heading.appendChild(ul);

// console.log(heading);

// ----------------------------------------------------------

// const newHeading = document.createElement('h2');
// newHeading.className = 'title';
// newHeading.innerHTML = 'New List';

// const oldHeading = document.querySelectorAll('.title')[1];

// const parentHeading = document.querySelector('#book-list');
// parentHeading.replaceChild(newHeading, oldHeading);


// console.log(oldHeading);

///-------------------------------------------> hazfe element

//  const newHeading = document.createElement('h2');
//  newHeading.className = 'title';
//  newHeading.innerHTML = 'New List';

//  const oldHeading = document.querySelectorAll('.title')[1];

//  const parentHeading = document.querySelector('#book-list');
//  parentHeading.replaceChild(newHeading, oldHeading);

// const li = document.querySelectorAll('li')[2];
// const ul = document.querySelector('ul');

// li.remove();             // other model for remove element
// ul.children[1].remove(); // remove kardane yek element
// console.log(li);
// console.log(oldHeading);
//------------------------------------------------------->

// Add event lisen
//ONE CLICK METHODE
// const link = document.querySelector('.button').addEventListener('click',
// function(e){
//     console.log('Hi Farshid');
//     e.preventDefault();

// });
// // DBL CLICK METHODE
// document.querySelector('.button').addEventListener('dblclick',
// function(e){
//     console.log('Hi Farshid x2');
//     e.preventDefault();

// });
// document.querySelector('.button').addEventListener('mousedown', //zamani ke kilide mouse ra feshar midi
// function(e){
//     e.preventDefault();

//     console.log('Hi Farshid Mouse Down');
    
// });
// document.querySelector('.button').addEventListener('mouseup',   //zamani ke kilde mouse ro vel mikoni
// function(e){
//     e.preventDefault();

//     console.log('Hi Farshid Mouse up');
    
// });
// document.querySelector('.button').addEventListener('mouseenter', //zamanike eshare gare mouse rooye clid mire
// function(e){
//     e.preventDefault();

//     console.log('Hi Farshid Mouse in');
    
// });
// document.querySelector('.button').addEventListener('mouseout',    // zamani ke az rooye clid kenar miri
// function(e){
//     e.preventDefault();

//     console.log('Hi Farshid Mouse out');
    
// });
// document.querySelector('.button').addEventListener('mousemove',  // zamani ke bar rooye on element mouse ra harkat bedahim
// function(e){
//     e.preventDefault();

//     console.log('Hi Farshid mouse Moving');
    
// });

// document.body.addEventListener('mousemove', // evente harkate mouse dar tamamie badane
// function(){
//     console.log('Mouse in moving.....')
// });


//--------------------------------->
// const heading = document.querySelectorAll('.title')[1];

// document.body.addEventListener('mousemove', // evente harkate mouse dar tamamie badane
//  function(e){
//     e.preventDefault();

//      console.log(`mouseX: ${e.offsetX}, mouseY : ${e.offsetY}`);

// heading.innerHTML = `mouseX: ${e.offsetX}, mouseY : ${e.offsetY}`;

//  });
// const checkBox = document.querySelector('#hide input');
// const heading = document.querySelectorAll('title')[1];
// const uls = document.querySelector('ul');


//  checkBox.addEventListener('change', function(e){
//      if(checkBox.checked){
//         heading.style.display = 'none';
//          uls.style.display = 'none';
//      }else{
//          heading.style.display = 'block';
//          uls.style.display = 'block';
//      }
   
   
//  })
// inputText.addEventListener('keydown',function(e){ 
//     console.log(inputText.value);
// });
// inputText.addEventListener('keyup',function(e){  /type hamzaman dar console
//     console.log(inputText.value);
// })
// inputText.addEventListener('focus',function(e){
//     console.log('selected');
// })
// inputText.addEventListener('blur',function(e){
//     console.log('unselected');
// })
 

// localStorage.setItem('Farshid', 'Parvizian');
// localStorage.clear();
//  localStorage.removeItem('1');
//  const name = localStorage.getItem('Farshid');
//  console.log(name);




// const arr = ['Farshid1', 'Farshid2'];
// const obj ={name:"farsjod", age:32};

// const myArray =localStorage.getItem('array').split(',');
//  const myObject = JSON.parse(localStorage.getItem('object'));
// localStorage.setItem('array',arr);
//  localStorage.setItem('object', JSON.stringify(obj));
// console.log(myArray);
// console.log(myObject);