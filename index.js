let li,toDo,text;

	
let list = document.querySelector("ul");
list.addEventListener(
    "click",
    function(check) {
        if (check.target.tagName === "LI") {
            check.target.classList.toggle("checked");
        }
    }
);

let span = document.createElement("span");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);

let close = document.getElementsByClassName("close");
	
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    };
};

function addList(){
    li = document.createElement("li");
    toDo = document.querySelector("#task").value;
    text = document.createTextNode(toDo);
    li.appendChild(text);

    if(toDo.length == 0 || toDo.length === "" ){
        $('.error').toast('show');
    }
    else{
        $('.success').toast("show");
        document.querySelector("#list").appendChild(li);
    }
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        };
    };
}