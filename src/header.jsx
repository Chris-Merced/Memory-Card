import pikachu from '/pikachu.svg'
import {useEffect, useState} from 'react'

export function Header(){
    return(
        <nav>
            <h1>Try to Remember what Pokemon you pick!</h1>
            <img className="pikachu" src={pikachu}></img>
           
        </nav>
    )
}