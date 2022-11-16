// variables in function scope get deleted as soon as function is completed

// we dont need to use the `target` yet in this case
// the target is the: function addH3(target)

function addH3(){
    let header = document.getElementById(`header`);
    header.insertAdjacentHTML(`afterEnd`, 
                            `<h3>Secret Hover</h3>`);
}

function removeH3(){
    let h3 = document.querySelector(`#header + h3`);
        h3.remove();
    // // the empty string is a valid string, changing outerHTML to nothing
    // h3.outerHTML = ``;
    // null also works without the string backticks
    // h3.outerHTML = null;
    // another way to remove the H3
    // h3.remove();
}

function makePurple(event){
    // if you just put `p` here it will not work if user presses capital P
    // you can find the code in the keypairs when you select the object in debug window
    if(event.code == `KeyP`){
        document.body.style.backgroundColor = `lavender`;
    } else{
        console.log(event.key);
    }
}

function makeGreen(event){
    // if you just put `p` here it will not work if user presses capital P
    // you can find the code in the keypairs when you select the object in debug window
    if(event.code == `KeyP`){
        document.body.style.backgroundColor = `lightgreen`;
    } else{
        console.log(event.key);
    }
}

function changePicture(event){
    console.log(`Sabrina is ${isSabrina}`);
    if(isSabrina){
        isSabrina = false;
        event.target.setAttribute(`src`, `https://www.themarysue.com/wp-content/uploads/2018/08/willow-reading-in-buffy.jpg?fit=1200%2C675`)
    } else{
        isSabrina = true;
        event.target.setAttribute(`src`, "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w1920-q80/marquee/1021664/a2a40d90f9d535b7_stw_sp_hero_landscape.jpg")
    }
}

let header = document.getElementById(`header`);
header.addEventListener(`mouseover`, addH3);
header.addEventListener(`mouseleave`, removeH3);

// keydown is pressing key
document.body.addEventListener(`keydown`, makePurple);
// the event only fires when key is released
document.body.addEventListener(`keyup`, makeGreen);

// create a variable in the SCRIPT scope, not function scope
// if we only created this variable in the function ChangePicture then it would be lost after function is complete
let isSabrina = true;
document.getElementById(`sabrina`).addEventListener(`click`,
                                                    changePicture);
