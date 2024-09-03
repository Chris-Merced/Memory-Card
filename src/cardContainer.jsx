import {Card} from './card'
import {useState} from 'react'


export function CardContainer({tempPokemonList, scoreCounter, setCounter}){

    let [newPokemonList, setPokemonList] = useState([...tempPokemonList]);
    const [pokemonClicked, setPokemonClicked] = useState([]);    


    function shuffleArray(prevList){
        const newArray = prevList.sort(()=>Math.random()-0.5);
        return newArray;
    }

    function ShuffleAndRecord(id){
        return function Attempt(){
            if (!pokemonClicked.includes(id)){
                setCounter((prevCounter) => {return prevCounter + 1});
                const checkArray = [...pokemonClicked];
                checkArray.push(id);
                setPokemonClicked(checkArray);      
            }else{
                const newArray=[];
                setPokemonClicked(newArray);
                setCounter(0);
                document.querySelector(".currentScore").style.transform = "translateY(100px)";

            }
            setPokemonList(shuffleArray([...newPokemonList]));
            
        }  
    }


    return(
        <div className="cardContainer">
            {newPokemonList.map((pokemon)=>{
                    return <Card 
                        key={pokemon.id} 
                        pokemon={pokemon} 
                        setPokemonList={setPokemonList} 
                        newPokemonList={newPokemonList}
                        clickHandler={ShuffleAndRecord}
                        />
            })}
        </div>
    )

}