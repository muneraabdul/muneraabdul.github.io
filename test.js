// to calculate moves , when moves =9 and no one win "it's a draw"
var moves = 0;

// function of all possibles of 3 boxes to win .. 
// the Boxes of possibles --> 123 - 456 - 789 - 147 - 258 - 369 - 159 -357 
// if moves =9 & boxes != possibles "it's a draw"
function selectWinner() {
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
    else if (moves == 9) {
        turn.innerHTML = "It's a draw!"
    }
    
}

// function when X or O "win" add animate to "congrats" + the background of 3 boxes will be "yellow" and text size be 45px
function threeBoxes (b1,b2,b3) {
    b1.style.background = "yellow" ;
    b2.style.background = "yellow" ;
    b3.style.background = "yellow" ;
    turn.innerHTML = b1.innerHTML + " Won Congrats" ;
    turn.style.fontSize = "45px" ; 
    turn.classList.add("zoomIn"); 
    turn.style.color = "white" ; 
 }



 var  boxes = document.querySelectorAll(".box") ;
var x_or_o = 0 ;

//  for to calculate moves , and when player X click on box the span will be : "O Turn Now" , and when player O click on box the span will be "X Turn Now"
for ( var i = 0 ; i <boxes.length ; i++ ) {
    boxes[i].addEventListener("click", function () {
        moves++;

        if ( this.innerHTML !== "x" && this.innerHTML !== "O") {
        if(x_or_o %2 === 0) {
            this.innerHTML = "X" ;  
            turn.innerHTML = " O Turn Now" ;
            selectWinner() ;
            x_or_o += 1 ;
            
            
        } else {
            this.innerHTML = "O" ;
            turn.innerHTML = " X Turn Now" ;
            selectWinner() ;
            x_or_o += 1 ;
            
        }
    
    } 
} 
    )
}

// function to rest the container and Boxes 
function replay() {
    for(var i =0 ; i<boxes.length ; i++) {
        boxes[i].innerHTML = "" ;
        boxes[i].style.background = "white" ;
        
        turn.innerHTML = " play " ;
        turn.style.color = "white" ;  
        turn.style.fontSize = "25px" ; 
    }
}

// for when mouseover on box the background change color to gray and when mouseout return to white
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