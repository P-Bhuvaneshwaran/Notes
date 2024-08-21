
let con = document.querySelector(".container");

let addNote = document.querySelector("#addNote");
addNote.addEventListener("click",()=>{
    let divTag = document.createElement('div');
    divTag.id = "note";
    
    let textArea = document.createElement("textarea");
    textArea.placeholder = "Enter your note here...";
    textArea.cols = "100%";
    // textArea.rows = "10 px"
    textArea.rows = "4"
    
    divTag.appendChild(textArea);
    
    let btnDiv = document.createElement('div');
    btnDiv.className = "btns";

    divTag.appendChild(btnDiv);
    // divTag.firstElementChild
    btnDiv.innerHTML = `<button id="btnSave" onclick="saveFunction(event)">Save</button>
     <button id="btnDel" onclick="delFunction(event)">Delete</button>`;
    
    con.appendChild(divTag);


    // operation here

    
    
    
    
})

// Save button

function saveFunction(event){
    let msg = event.target.parentElement.parentElement.firstElementChild.value
    // console.log(msg);
    if(msg!="")
    {
        alert("message Saved")
    }
    else{
        alert("please enter your note");
    }

}

function delFunction(event){
    let parent1 = event.target.parentElement;
    parent1.parentElement.remove();
    
}