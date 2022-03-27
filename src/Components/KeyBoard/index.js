import './index.css';
import clear from '../../public/clear.png';

let attempt = 0;
let col = 0;
let maxAttempt = 6;
let maxLength = 5;
let correctWord = "MOVIE";
let won = false;


//Movie  omega
function validateWord(){
    let table = document.getElementById("mywordletable");
    let correctLetterCount = 0;
    let enteredWordRow = table.rows[attempt];
    for(let i=0;i<maxLength ;i++)
    {
        let ch = enteredWordRow.cells[i].innerHTML;
        let correctPosition = correctWord.indexOf(ch);
        if( correctPosition != -1) // 1
        {
            if(i == correctPosition){
                enteredWordRow.cells[i].style.background = '#6aaa64';
                enteredWordRow.cells[i].classList.add('keysAfterEnter');
                correctLetterCount++;
            }
            else
            {
                enteredWordRow.cells[i].style.background = '#c9b458';
                enteredWordRow.cells[i].classList.add('keysAfterEnter');
            } 
        }else{
            enteredWordRow.cells[i].style.background = "#787c7e";
            enteredWordRow.cells[i].classList.add('keysAfterEnter');
        }
    }
    if(correctLetterCount === maxLength)
    {
        won = true;
        console.log("You won");
    }
    attempt++;
    col = 0;
}

 function handleKeyboardClick(e){
     if(won){
         return;
     }
    let table = document.getElementById("mywordletable");
    let value = e.target.innerHTML;
    if(value == "" )
    {
        if(col > 0){
            table.rows[attempt].cells[col-1].innerHTML = "";
            col--;
        }
        return;
    }
    if(value ==  "Enter")
    {
        if(col < maxLength)
        {
            alert("Need to fill upto 5 alphabets");
            return;
        }
        
        validateWord();
        return;
    }
    if(col >= maxLength )
    {
        return;
    }
    table.rows[attempt].cells[col].innerHTML = value;
    col++;
}

export function KeyBoard(){
    // useEffect(()=>(
    //     generateKeyboard(3,9)
    // ),[]);
    return (
        <div id="myKeyBoard">
           <div className='row'>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>Q</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>W</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>E</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>R</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>T</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>Y</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>U</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>I</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>O</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>P</div>
           </div>
           <div className='row'>
                <div className='key' onClick={(e)=>handleKeyboardClick(e)}>A</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>S</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>D</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>F</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>G</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>H</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>J</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>K</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>L</div>
           </div>
           <div className='row'>
               <div className='key enter' onClick={(e)=>handleKeyboardClick(e)}>Enter</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>Z</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>X</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>C</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>V</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>B</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>N</div>
               <div className='key' onClick={(e)=>handleKeyboardClick(e)}>M</div>
               <div className='key cross' onClick={(e)=>handleKeyboardClick(e)}>
                   <img src={clear} alt="Backspace" />
               </div>
           </div>
        </div>
    )
}