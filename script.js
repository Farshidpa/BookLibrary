 const ul = document.querySelector('ul');
 const link = document.querySelector('.button');
 const inputText = document.querySelector('#add-book input');
 const spanDelete = `<span class="delete">Delete</span>`;
 link.addEventListener('click', function(e){
    
    if(inputText.value === ''){
    
        window.alert("You must enter your book name!");
    }else{
        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.className= 'name';
        spanName.textContent = inputText.value;
        li.appendChild(spanName);
        li.innerHTML += spanDelete;
        ul.appendChild(li);
        storeToLocalStorag(inputText.value);
       e.preventDefault();
       inputText.value='';
    } 
   
 })
document.addEventListener('DOMContentLoaded', function(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      
        tasks=[];
        
    }else{
        tasks = localStorage.getItem('tasks').split(',');

    }
    for(let item of tasks){
        const spanName = document.createElement('span');
        spanName.className= 'name';
        spanName.textContent = item;
        
        const li = document.createElement('li');
        li.appendChild(spanName);
        li.innerHTML += spanDelete;
        ul.appendChild(li);
        e.preventDefault();
    }
   
    
})
ul.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
      e.target.parentElement.remove();
      removeFromLocalStorage(e.target.parentElement.children[0].textContent);
      e.preventDefault();
    }
})
function removeFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
        
    }else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    for(let i=0; i<tasks.length; i++){
        if(tasks[i] === task){
            tasks.splice(i,1);
        }
    }
    localStorage.setItem('tasks', tasks);
    if(tasks.length === 0){
        localStorage.clear();
        
    }else{
        localStorage.setItem('tasks',tasks);
    }
}
function storeToLocalStorag(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
        
    }else{
        tasks = localStorage.getItem('tasks').split(',');
    }
    tasks.push(task);
    localStorage.setItem('tasks',tasks);
}



 const checkBox = document.querySelector('#hide input');
 const heading = document.querySelectorAll('.title')[1];
 const uls = document.querySelector('ul');
 checkBox.addEventListener('change', function(e){
     if(checkBox.checked){
         heading.style.display = 'none';
         uls.style.display = 'none'
     }else{
         heading.style.display = 'block';
         uls.style.display = 'block'
     }
 
 
 })

 