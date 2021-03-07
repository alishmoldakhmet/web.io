let newbutton = document.querySelector('#inputbut');
let mycontainer = document.querySelector('#ret');
let inputField = document.querySelector('#InputField');

let todolist = [];

if(localStorage.getItem('todo')){
    todolist=JSON.parse(localStorage.getItem('todo'));
    DisplayMessage();
}
newbutton.addEventListener('click',function(){
    let newTodo = {
        todo: inputField.value,
        checked:false,
        important:false
    };
    
    todolist.push(newTodo);
    DisplayMessage();
    localStorage.setItem("todo",JSON.stringify(todolist));
});
function DisplayMessage(){
    let DisplayMessage = '';
    todolist.forEach(function(item,i){
        
        DisplayMessage =  DisplayMessage+`
        <li>
          <input type='checkbox' id='item_${i}' ${item.checked ? 'checked': ''}>
          <label for='item_${i}' class="${item.important ? "important":""}">${item.todo}</label>
          <img id='ret_${i}' src="aaa.png" class="book" onclick="deleteFunc(${i})">
        </li>
        `;
       
        mycontainer.innerHTML = DisplayMessage;
    });

}
const deleteFunc = (id) => {
    console.log(id, 'id')
        todolist.forEach(function(item,i){
                if(i===id){
                    todolist.splice(i,1)
                }
                DisplayMessage();
                localStorage.setItem("todo",JSON.stringify(todolist));
             });
}

mycontainer.addEventListener('change', function(event){
    event.preventDefault();
    console.log(event);
    let itemid = event.target.getAttribute('id');
    let labelfor = mycontainer.querySelector('[for='+ itemid +']');
    let valuelabel = labelfor.innerHTML;
    todolist.forEach(function(item){
        if(item.todo===valuelabel){
            
            item.important=!item.important;
            item.checked=!item.checked;
            DisplayMessage();
            localStorage.setItem("todo",JSON.stringify(todolist));
        }
    });
});
// mycontainer.addEventListener('click', function(img){
//     console.log(img,'img');
//     let itid = img.target.getAttribute('id');
//     todolist.forEach(function(item,i){
//         if("ret_"+i===itid){
//             todolist.splice(i,1)
//         }
//         DisplayMessage();
//         localStorage.setItem("todo",JSON.stringify(todolist));
//     });
// });
