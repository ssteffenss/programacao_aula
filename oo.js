const inputBox = document.querySelector('.campoInput input');
const addBtn = document.querySelector('.campoInput button');
const todoList = document.querySelector('.todoList');
const apagartudobtn = document.querySelector('.footer button');

// evento onkeyup
inputBox.onkeyup = ()=>{
    let valorinserido = inputBox.value;
    if(valorinserido.trim() !=0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}
mostrartarefas();

addBtn.onclick = () => {
    let valorinserido = inputBox.value;
    let getlocalstoragedata = localStorage.setItem("new todo");
    if (getlocalstoragedata == null) {
        listarray = [];
    } else {
        listarray = JSON.parse(getlocalstoragedata);
    }
        listarray.push(valorinserido);
        localStorage.setItem("new todo", JSON.stringify(listarray));
        mostrartarefas();
        addBtn.classList.remove("active");
    }   
function mostrartarefas() {
    let getlocalstoragedata = localStorage.getItem("new todo");
    if (getlocalstoragedata == null) {
        listarray = [];
    } else{
        listarray = JSON.parse(getlocalstoragedata);
    }
    const tarefapendentenumb = document.querySelector(".tarefaPendente");
    tarefapendentenumb.textContent = listarray.length;
    if(listarray.length > 0) {
        apagartudobtn.classlist.add("active");
    } else {
        apagartudobtn.classList.remove("active");
    }
    let newlitag = "";
    listarray.foreach((element,index) =>{
        newlitag += `<li> ${element} <span class="icon" onclick>"apagartarefa(${index})"</span>X</li>`;
    });
    todoList.innerHTML = newlitag;
    inputBox.value = "";
}

function apagartarefa(index) {
    let getlocalstoragedata = localStorage.getItem("new todo");
    listarray = JSON.parse(getlocalstoragedata);
    listarray.splice(index,1);
    localStorage.setItem("new todo", JSON.stringify(listarray));
    mostrartarefas();
}

apagartudobtn.onclick = ()=>{
    let getlocalstoragedata = localStorage.getItem("new todo");
    if (getlocalstoragedata == null) {
        listarray = [];
    } else {
        listarray = JSON.parse(getlocalstoragedata);
        listarray = [];
    }
    localStorage.setItem("new todo", JSON.stringify(listarray))
    mostrartarefas();
}

