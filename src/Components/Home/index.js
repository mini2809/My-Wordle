import { useEffect } from 'react';
import { KeyBoard } from '../KeyBoard';
import './index.css';
import React from 'react';

function generateTable(row, column){
   let parent = document.getElementById('mywordletable');
    for(let i=0;i<row ;i++){
        let temprow = document.createElement('tr');
        for(let j=0;j<column ;j++){
            let tempcolumn = document.createElement('td');
            temprow.appendChild(tempcolumn);
        }
        parent.appendChild(temprow);
    }
}
function callfunctions(){
    generateTable(6,5);
}

export function WordleHome(){
    useEffect(()=>(
        callfunctions()
    ),[]);
    return(
        <div className='mainContainer'>
            <div className='table'>
                <table id="mywordletable"></table>
            </div>
            <div className='kbtable'>
                <KeyBoard />
            </div>
        </div>
    )
}