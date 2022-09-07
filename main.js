let container = document.getElementById("blur");
var NoTask = document.createElement("div")
NoTask.classList.add("display");
NoTask.innerText = "No Tasks To Display"
container.appendChild(NoTask);

$("#addTodo").click(function(){
    $(".display").hide();
});

let addToDOButton = document.getElementById("addTodo");
let toDoContainer = document.getElementById("toDocontainer");
let inputField = document.getElementById("inputfield");

addToDOButton.addEventListener('click', function(){
    var div1 = document.createElement("div");
    div1.classList.add("cardstyling");
    div1.innerText = inputField.value;
    console.log(inputField.value);
    toDoContainer.appendChild(div1);
    inputField.value = "";

    // var a = document.createElement('a');
    // a.style.textDecoration = "none";
    // a.href = "index2.html";
    // a.classList.add("a");
    // div1.appendChild(a);
    // a.innerText = div1.value;
    // console.log(a.innerText);
    // div1.appendChild(a);

    // container.removeChild(NoTask);

    // div1.addEventListener('click', function(){
    //     var enlarge = document.getElementsByClassName("cardstyling")
    //     enlarge.classList.add("enlarge")
    //     toDoContainer.appendChild(enlarge);
    // })

    if(div1.innerText.length == 0){
       alert("Please Enter a Task List");
       toDoContainer.removeChild(div1);
       popup.classList.add("open-popup");
       container.appendChild(NoTask);
       return;
    }

    let line = document.createElement('hr');
    line.classList.add("line");
    div1.appendChild(line)

    // container.removeChild(NoTask);

    let addtoList = document.getElementById("addToList");
    let toDOList = document.getElementsByClassName("cardstyling");
    let innerinput = document.getElementById("inputfieldList");

    addtoList.addEventListener('click', function(){
    var newlist = document.createElement('div');
    newlist.classList.add("outer")
    newlist.innerText = innerinput.value;
    console.log(innerinput.value);
    div1.appendChild(newlist);
    innerinput.value = "";

    // let para = document.createElement('p');
    // para.classList.add("para");
    // para.innerHTML = innerinput.value;
    // newlist.appendChild(para);
    // innerinput.value = "";

    // if(newlist.innerText.length == 0){
    //     alert("Please Enter a List Name");
    //     newlist.removeChild(div1);
    //     return;
    //  }

    let tick = document.createElement('div');
    tick.classList.add("tick");
    newlist.appendChild(tick);

    tick.addEventListener('click', function(){
        newlist.style.textDecoration = "line-through";
    })

    tick.addEventListener('dblclick', function(){
        newlist.style.textDecoration = "none"
    })
})

    var addlist = document.createElement("div");
    addlist.classList.add("addlist");
    addlist.innerHTML = "";
    div1.appendChild(addlist);

    addlist.addEventListener('click', function(){
        var secondpop = document.getElementById("popup123");
        secondpop.classList.add("open-popup123");
        var secBlur = document.getElementById('blur');
        secBlur.classList.add("blurbckgrnd");
    })
   
    var del = document.createElement("div");
    del.classList.add("del");
    del.innerHTML = "";
    div1.appendChild(del);

    del.addEventListener('dblclick', function(){
    toDoContainer.removeChild(div1)
    })

})

//-----------------------------------

function openpopup(){
    var popup = document.getElementById("popup");
    popup.classList.add("open-popup");
    var blur = document.getElementById('blur');
    blur.classList.add("blurbckgrnd")
}
function closepopup(){
    popup.classList.remove("open-popup");
    var remblur = document.getElementById('blur')
    remblur.classList.remove("blurbckgrnd");
}

let secondPop = document.getElementById("popup123");
function closepopup123(){
    secondPop.classList.remove("open-popup123");
    var remSecBlur = document.getElementById('blur');
    remSecBlur.classList.remove("blurbckgrnd")
}

//---------------------------------------

// let secondContainer = document.getElementById("displaycard")
// let displayCard = document.getElementsByClassName("cardstyling");
// displayCard.classList.add("displayCard");
// secondContainer.appendChild(displayCard)

