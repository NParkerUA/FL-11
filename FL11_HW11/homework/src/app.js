const FIELD = document.getElementsByClassName('inputField');
let awng = document.getElementsByClassName('warningHeader');
let dragEl;
const addbtn = document.getElementsByClassName('addBtn');
const todolist = document.getElementById('list');
const MAXELEMENTS = 10;


FIELD[0].addEventListener('keyup', function(e){
    btnEn(e.target);
})

addbtn[0].addEventListener('click', function(){
    
    if (todolist.childElementCount === MAXELEMENTS){
        addbtn[0].disabled = true;
        FIELD[0].disabled = true;
        awng[0].classList.remove('hidden');
        return ;
    }
   
    let listItem = document.createElement('li');
	listItem.classList.add('itemList');   
	
    let itSpan = document.createElement('span');
    itSpan.innerText = FIELD[0].value;
	itSpan.classList.add('liSpan');
	
    let editlistItem = document.createElement('input');
    editlistItem.classList.add('editInput');    
    let doneBtn = document.createElement('button');
    let insertDoneBtn = document.createElement('i');
    insertDoneBtn.classList.add('icons_size','material-icons');
    insertDoneBtn.innerText = 'check_box_outline_blank';
    doneBtn.appendChild(insertDoneBtn);
    doneBtn.classList.add('doneButton')        
    let editBtn = document.createElement('button');
    let insertEditBtn = document.createElement('i');
    insertEditBtn.classList.add('icons_size','material-icons');
    insertEditBtn.innerText = 'create';
    editBtn.appendChild(insertEditBtn);
    editBtn.classList.add('editButton'); 
    let deleteBtn = document.createElement('button');
    let insertdeleteBtn = document.createElement('i');
    insertdeleteBtn.classList.add('icons_size','material-icons');
    insertdeleteBtn.innerText = 'delete'
    deleteBtn.classList.add('deleteButton')
    deleteBtn.appendChild(insertdeleteBtn);        
    let saveBtn = document.createElement('button');
    let insSave = document.createElement('i');
    insSave.classList.add('icons_size','material-icons');
    insSave.innerText = 'save';
    saveBtn.classList.add('saveButton');
    saveBtn.appendChild(insSave);    
    let divIt = document.createElement('div');
    divIt.classList.add('divItem');
    divIt.draggable = true;
    divIt.appendChild(doneBtn);
    divIt.appendChild(itSpan);
    divIt.appendChild(editBtn);
    divIt.appendChild(deleteBtn);  
    let hidndiv = document.createElement('div');
    hidndiv.appendChild(editlistItem);
    hidndiv.appendChild(saveBtn);
    hidndiv.classList.add('hidden', 'editclass');     
    listItem.appendChild(divIt);
    listItem.appendChild(hidndiv);
    todolist.appendChild(listItem);
    FIELD[0].value ='';
    btnEn(FIELD[0]);
    
    function handleDrgSt(e) { 
        dragEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDrgOv(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move'; 
    return false;
    }

    function handleDrgEnt() {
     
        this.classList.add('over');
    }

    function handleDrgLv() {
     
        this.classList.remove('over');  
    }

    function handleDrp(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); 
        }
        if (dragEl !== this) {
            dragEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            this.classList.remove('over');
            bindEvents(this);
            bindEvents(dragEl);
        }
    return false;
    }

    function handleDrgNd() {
        this.classList.remove('over');
    }
    bindEvents(listItem);
    
    listItem.addEventListener('dragstart', handleDrgSt, false);
    listItem.addEventListener('dragenter', handleDrgEnt, false)
    listItem.addEventListener('dragover', handleDrgOv, false);
    listItem.addEventListener('dragleave', handleDrgLv, false);
    listItem.addEventListener('drop', handleDrp, false);
    listItem.addEventListener('dragend', handleDrgNd, false);
    
    function bindEvents(e){
        const del = e.getElementsByClassName('deleteButton');
        const edit = e.getElementsByClassName('editButton');
        const editlistItem = e.getElementsByClassName('editInput');
        const itSpan = e.getElementsByClassName('liSpan');
        const hidndiv = e.getElementsByClassName('editclass');
        const divIt = e.getElementsByClassName('divIt');
        const done = e.getElementsByClassName('doneButton');
        const insertDoneBtn = e.getElementsByClassName('icons_size');
        const save = e.getElementsByClassName('saveButton');

        del[0].addEventListener('click',function(){
            todolist.removeChild(e);
            addbtn[0].disabled = false;
            awng[0].classList.add('hidden');
            FIELD[0].disabled = false;
        })


        edit[0].addEventListener('click', function(){ 
            hidndiv[0].classList.remove('hidden');
            editlistItem[0].value = itSpan[0].innerText;
            divIt[0].classList.add('hidden');
            
        })
        
        save[0].addEventListener('click', function(){
            itSpan[0].innerText = editlistItem[0].value;
            divIt[0].classList.remove('hidden');
            hidndiv[0].classList.add('hidden');
            
        })

        done[0].addEventListener('click', function(){
            insertDoneBtn[0].innerText = 'done';
            done[0].disabled = true;
            edit[0].classList.add('hidden');
        })
    }
})

function btnEn(e) {
    if (e.value !=='') {
        addbtn[0].disabled = false;
    } else {
        addbtn[0].disabled = true;
    }
    
}