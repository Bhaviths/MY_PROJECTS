let winner;
let currentPlayer = "X";
let win = false;

const player = document.querySelector("#player");
const boxs = Array.from(document.querySelectorAll(".box"));
const result = document.querySelector("#result");
const reset = document.querySelector('button');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');
const b9 = document.querySelector('.b9');

result.style.color = "green";



//Game Code

boxs.forEach((box)=>{
        box.onclick = () => {
            if(box.innerText === "" && result.innerText === "")
                game(box);
        }
}
)


let b = [
    "b1","b2","b3",
    "b4","b5","b6",
    "b7","b8","b9"
];

let ele = [
    b1,b2,b3,
    b4,b5,b6,
    b7,b8,b9
];

function game(box){

    //Game Start
    while(box.innerText === "")
    {
        
        if(currentPlayer === 'X')
        {
            //Removes the box used or played from the array
            ele.splice(b.indexOf(box.id),1);
            b.splice(b.indexOf(box.id),1);

            box.innerText = currentPlayer;
            winner = currentPlayer;
            currentPlayer = "O";
            player.innerText = currentPlayer;
            

        }
        if(currentPlayer === "O")
        {
            //I think the bug is in this if statement
            //instead of box.innerText = currentPlayer;
            if(b.length > 1)
            {
                let arr = Math.floor(Math.random()*ele.length);

                ele[arr].innerText = currentPlayer;
                console.log(ele[arr]);

                ele.splice(arr,1);
                b.splice(arr,1);

                winner = currentPlayer;
                currentPlayer = "X";
                player.innerText = currentPlayer;
            }
        }

        //win code

        //vertical
            if(b1.innerText == winner && b2.innerText == winner && b3.innerText == winner)
            {
                    result.innerText = `Player ${winner} Won`;
                    reset.style.visibility = "visible";
            }
            else{
                if(b4.innerText == winner && b5.innerText == winner && b6.innerText == winner)
                {
                    result.innerText = `Player ${winner} Won`;
                    reset.style.visibility = "visible";
                     
                }
                else{
                    if(b7.innerText == winner && b8.innerText == winner && b9.innerText == winner)
                    {
                        result.innerText = `Player ${winner} Won`;
                        reset.style.visibility = "visible";
                         
                    }
                }

                //horizontal
                if(b1.innerText == winner && b4.innerText == winner && b7.innerText == winner)
                {
                        result.innerText = `Player ${winner} Won`;
                        reset.style.visibility = "visible";
                         
                }
                else{
                    if(b2.innerText == winner && b5.innerText == winner && b8.innerText == winner)
                    {
                        result.innerText = `Player ${winner} Won`;
                        reset.style.visibility = "visible";
                         
                    }
                    else{
                        if(b3.innerText == winner && b6.innerText == winner && b9.innerText == winner)
                        {
                            result.innerText = `Player ${winner} Won`;
                            reset.style.visibility = "visible";
                             
                        }
                    }

                    //diagonal
                    if(b1.innerText == winner && b5.innerText == winner && b9.innerText == winner)
                    {
                            result.innerText = `Player ${winner} Won`;
                            reset.style.visibility = "visible";
                             
                    }
                    else{
                        if(b3.innerText == winner && b5.innerText == winner && b7.innerText == winner)
                        {
                            result.innerText = `Player ${winner} Won`;
                            reset.style.visibility = "visible";
                             
                        }
                    


                        //tie
                        if(b1.innerText != "" && b2.innerText != "" && b3.innerText != "" && b4.innerText != "" && b5.innerText != "" && b6.innerText != "" && b7.innerText != "" && b8.innerText != "" && b9.innerText != "")
                        {
                            result.innerText = "Tie";
                            reset.style.visibility = "visible";
                             
                            result.style.color = "red";
                        }
                    }
                }
            }
        //end of result

        //start-of-checker
        //vertical
        if(b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X')
        {
                result.innerText = `Player ${'X'} Won`;
                reset.style.visibility = "visible";
                 
        }
        else{
            if(b4.innerText == 'X' && b5.innerText == 'X' && b6.innerText == 'X')
            {
                result.innerText = `Player ${'X'} Won`;
                reset.style.visibility = "visible";
                 
            }
            else{
                if(b7.innerText == 'X' && b8.innerText == 'X' && b9.innerText == 'X')
                {
                    result.innerText = `Player ${'X'} Won`;
                    reset.style.visibility = "visible";
                     
                }
            }

            //horizontal
            if(b1.innerText == 'X' && b4.innerText == 'X' && b7.innerText == 'X')
            {
                    result.innerText = `Player ${'X'} Won`;
                    reset.style.visibility = "visible";
                     
            }
            else{
                if(b2.innerText == 'X' && b5.innerText == 'X' && b8.innerText == 'X')
                {
                    result.innerText = `Player ${'X'} Won`;
                    reset.style.visibility = "visible";
                     
                }
                else{
                    if(b3.innerText == 'X' && b6.innerText == 'X' && b9.innerText == 'X')
                    {
                        result.innerText = `Player ${'X'} Won`;
                        reset.style.visibility = "visible";
                         
                    }
                }

                //diagonal
                if(b1.innerText == 'X' && b5.innerText == 'X' && b9.innerText == 'X')
                {
                        result.innerText = `Player ${'X'} Won`;
                        reset.style.visibility = "visible";
                         
                }
                else{
                    if(b3.innerText == 'X' && b5.innerText == 'X' && b7.innerText == 'X')
                    {
                        result.innerText = `Player ${'X'} Won`;
                        reset.style.visibility = "visible";
                         
                    }
                }
            }
        }
        //end-of-checker

    
    }
}

//reset the entire game
reset.onclick = () => {
    window.location.reload();
}