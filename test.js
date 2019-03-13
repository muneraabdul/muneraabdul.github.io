var turn = document.getElementById("turn") ,
     boxes = document.querySelectorAll(".box") 


function selectWinner() {
    var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");

    if ( box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) 
    threeBoxes(box1,box2,box3) ;
    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) 
    threeBoxes(box4,box5,box6) ;
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) 
    threeBoxes(box7,box8,box9) ;
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) 
    threeBoxes(box1,box4,box7) ;
    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) 
    threeBoxes(box2,box5,box8) ;
    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) 
    threeBoxes(box3,box6,box9) ;
    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) 
    threeBoxes(box1,box5,box9) ;
    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) 
    threeBoxes(box3,box5,box7) ;
}

// function when X or  O win the background of box will be "yellow" and write "congrats" with red color and text size 45
function threeBoxes (b1,b2,b3) {
    b1.style.background = "yellow" ;
    b2.style.background = "yellow" ;
    b3.style.background = "yellow" ;
    turn.innerHTML = b1.innerHTML + " Won Congrats" ;
    turn.style.fontSize = "45px" ;
    turn.classList.add("zoomIn");
    turn.style.color = "white" ;
    
    
 }


var x_or_o = 0 ;
for ( var i = 0 ; i <boxes.length ; i++ ) {
    boxes[i].addEventListener("click", function () {
        if ( this.innerHTML !== "x" && this.innerHTML !== "O") {
        if(x_or_o %2 === 0) {
            console.log(x_or_o) ;
            this.innerHTML = "X" ;  
            turn.innerHTML = " O Turn Now" ;
            selectWinner() ;
            x_or_o += 1 ;
            
            
        } else {
            console.log(x_or_o) ;
            this.innerHTML = "O" ;
            turn.innerHTML = " X Turn Now" ;
            selectWinner() ;
            x_or_o += 1 ;
            
        }
    
    } 
} 
    )
}
// function to rest the container  
function replay() {
    
    for(var i =0 ; i<boxes.length ; i++) {
        // boxes[i].classList.remove("win") ;
        boxes[i].innerHTML = "" ;
        turn.style.fontSize = "25px" ;
        boxes[i].style.background = "white" ;
        turn.innerHTML = " play " ;
        turn.style.color = "white" ; 
        
        
        

    }

}
for(var i =0 ; i<boxes.length ; i++) {
    boxes[i].addEventListener("mouseover", function(e){
        if (e.target.style.background !== "yellow") {
    e.target.style.background = "grey";
    
        }
        })

        boxes[i].addEventListener("mouseout", function(e){
            if (e.target.style.background == "grey") {

                e.target.style.background = "white";
            }
                })
            }