let colorPic = document.getElementById("color");
let button = document.querySelector("button");
let Audio = document.querySelector("audio");
let text = document.querySelector("textarea");
let show = document.querySelector(".wrrap");

// ---------------for color change in input text-------------------
text.addEventListener("input",()=>{
    text.style.backgroundColor = colorPic.value;
})
// -----main button-------------------------------
button.addEventListener("click", ()=>{
    button.classList.add("btnn")
    Audio.play();

    if(text.value == ""){
        alert("Enter some text");
    }
    else{
        createElementt(text.value);
    }
    DeletButton();
})

// ----------------------create new divs--------------
function createElementt(notes){
    button.classList.remove("btnn");
    let div1 = document.createElement('div');
    show.appendChild(div1);

    div1.innerHTML = `<p>${notes}</p>
    <button class ="remove">Delete</button>`;
    // --------------color for store text-------------
    div1.style.color = colorPic.value;
    div1.classList.add("diiv1")
}

// -----------for dlt the parent divs----------------
function DeletButton(){
    let dlt = document.querySelectorAll(".remove");
    dlt.forEach(element => {
        element.addEventListener("click", ()=>{
            // console.log(e.target);
            element.parentElement.remove();
        }) 
    });
   
}