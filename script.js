/*Sample Calculator.
By: Selwy. 
*/
let calcBtn = document.querySelectorAll(".calc");
let theScreen = document.querySelector(".screen");
let resultBtn = document.querySelector(".equal")

let operator= false; //to monitor the clicked button, prevent enter digits after (=) and prenvent entter more than one operator.
let result = false; //To monitor (=) equal button state.
let operators = ["+", "-", "*", "/"];

//To Clear The Screen
function clrScr(){
    theScreen.innerHTML = "";
    result= false;
    operator= true;
}

//To Delete The Last Character
function backSpace() {
    let num = theScreen.innerHTML.slice(0, -1);
    theScreen.innerHTML = ""
    theScreen.append(num);
}

//To show the Pressed Charecter on The Screen and accomulate the entered value in the screen. 
calcBtn.forEach((btn)=>{
        
    btn.onclick= function(){
        if(theScreen.textContent.length===0){operator= true; result= false;}
        let num= this.textContent;
        if (result){
            // After (=) button it must be an operator not a digit
            if (operators.includes(num)){
                theScreen.textContent += num;
                result= false;
                operator = true;
            }
        }else{
            if (operator){
                if(this.classList.contains('digit')){
                    theScreen.textContent += num;
                    operator = false;
                }
            }else{
                if(this.classList.contains('digit')){
                    theScreen.textContent += num;
                    operator = false;
                }else{
                    theScreen.textContent += num;
                    operator = true;
                }
            }
        }
    }
})

// if eqial (=) button clicked 
resultBtn.onclick= function(){
    let lastInput= theScreen.textContent.charAt(theScreen.textContent.length - 1);
    if(operators.includes(lastInput)){
        backSpace();
    }
    theScreen.textContent = eval(theScreen.textContent);
    result= true;
}