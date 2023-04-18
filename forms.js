 //Input
 let list= []; 

 let toDo = '';
 
 const sectionTag = document.querySelector('#section');

 function deleteItem(item){
  var index= list.indexOf(item);
  list.splice(index , 1);
  displayItems();
 }
function displayItems(){
    
    let template = list.map((marker,index) =>
    `
    <li>
    
    ${marker} 
    <button type= "submit" onclick="deleteItem(${index})">Delete</button>
    <input type='checkbox'>Completed</input>

    
    </li>
    
    `);
    //Output
    ul.innerHTML=template.join('');


}
 
      //Process
 document.querySelector('form').addEventListener('submit', function(event){
     event.preventDefault();
     
     
 
     //Getting user input from form 
    toDo = document.querySelector('#toDoField').value;
         console.log(toDo);
      //Adding to do's to array 
        list.push(toDo);

        displayItems();

    })



 