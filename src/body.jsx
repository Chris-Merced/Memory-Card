import {useEffect, useState} from 'react'
import { CardContainer } from './cardContainer';
import { ScoreContainer } from './scoreContainer';

export function Body(){
    const [scoreCounter, setCounter] = useState(0);
    
    const [arcanine, setArcanine] = useState(null);
    const [gengar, setGengar] = useState(null);
    const [nidoking, setNidoking] = useState(null);
    const [pidgeot, setPidgeot] = useState(null);
    const [blastoise, setBlastoise] = useState(null);
    const [gyarados, setGyarados] = useState(null);
    const [tyranitar, setTyranitar] = useState(null);
    const [charizard, setCharizard] = useState(null);
    const [entei, setEntei] = useState(null);
    const [lapras, setLapras] = useState(null);
    const [snorlax, setSnorlax] = useState(null);
    const [feraligatr, setFeraligatr] = useState(null);
    
    async function getArcanine(){
        const arcanineResponse = await fetch("https://pokeapi.co/api/v2/pokemon/arcanine", {mode:'cors'});
        const arcanineJSON = await arcanineResponse.json();
        return arcanineJSON;
    }

    async function getGengar(){
        const gengarResponse = await fetch("https://pokeapi.co/api/v2/pokemon/gengar", {mode:'cors'});
        const gengarJSON = gengarResponse.json();
        return gengarJSON
    }

    async function getNidoking(){
        const nidokingResponse = await fetch("https://pokeapi.co/api/v2/pokemon/nidoking", {mode:'cors'});
        const nidokingJSON = await nidokingResponse.json();
        return nidokingJSON;
    }

    async function getPidgeot(){
        const pidgeotResponse = await fetch("https://pokeapi.co/api/v2/pokemon/pidgeot", {mode: 'cors'})
        const pidgeotJSON = await pidgeotResponse.json();
        return pidgeotJSON;
    } 

    async function getBlastoise(){
        const blastoiseResponse = await fetch("https://pokeapi.co/api/v2/pokemon/blastoise", {mode:'cors'})
        const blastoiseJSON = await blastoiseResponse.json();
        return blastoiseJSON;
    }

    async function getGyarados(){
        const gyaradosResponse = await fetch("https://pokeapi.co/api/v2/pokemon/gyarados",{mode: 'cors'})
        const gyaradosJSON = await gyaradosResponse.json();
        return gyaradosJSON;
    }

    async function getTyranitar(){
        const tyranitarResponse = await fetch("https://pokeapi.co/api/v2/pokemon/tyranitar", {mode: 'cors'})
        const tyranitarJSON = await tyranitarResponse.json();
        return tyranitarJSON;
    }

    async function getCharizard(){
        const charizardResponse = await fetch("https://pokeapi.co/api/v2/pokemon/charizard", {mode:'cors'})
        const charizardJSON = await charizardResponse.json();
        return charizardJSON;
    }

    async function getEntei(){
        const enteiResponse = await fetch ("https://pokeapi.co/api/v2/pokemon/entei", {mode:'cors'})
        const enteiJSON = await enteiResponse.json();
        return enteiJSON;
    }

    async function getLapras(){
        const laprasResponse = await fetch("https://pokeapi.co/api/v2/pokemon/lapras", {mode:'cors'})
        const laprasJSON = laprasResponse.json();
        return laprasJSON;
    }

    async function getSnorlax(){
        const snorlaxResponse = await fetch("https://pokeapi.co/api/v2/pokemon/snorlax", {mode:'cors'})
        const snorlaxJSON = await snorlaxResponse.json();
        return snorlaxJSON
    }

    async function getFeraligatr(){
        const feraligatrResponse = await fetch('https://pokeapi.co/api/v2/pokemon/feraligatr', {mode:'cors'})
        const feraligatrJSON = feraligatrResponse.json();
        return feraligatrJSON;
    }

    useEffect(()=>{
        getArcanine().then((arcanineJSON)=>{
            setArcanine(arcanineJSON);
        })

        getGengar().then((gengarJSON)=>{
            setGengar(gengarJSON);
        })

        getNidoking().then((nidokingJSON)=>{
            setNidoking(nidokingJSON)
        })

        getPidgeot().then((pidgeotJSON)=>{
            setPidgeot(pidgeotJSON)
        })

        getBlastoise().then((blastoiseJSON)=>{
            setBlastoise(blastoiseJSON)
        })

        getGyarados().then((gyaradosJSON)=>{
            setGyarados(gyaradosJSON)
        })

        getTyranitar().then((tyranitarJSON)=>{
            setTyranitar(tyranitarJSON)
        })

        getCharizard().then((charizardJSON)=>{
            setCharizard(charizardJSON);
        })

        getEntei().then((enteiJSON)=>{
            setEntei(enteiJSON);
        })

        getLapras().then((laprasJSON)=>{
            setLapras(laprasJSON)
        })

        getSnorlax().then((snorlaxJSON)=>{
            setSnorlax(snorlaxJSON);
        })

        getFeraligatr().then((feraligatrJSON)=>{
            setFeraligatr(feraligatrJSON)
        })
    },[])
    
    if (!arcanine || !gengar || !nidoking || !pidgeot || !blastoise || !gyarados || !tyranitar || !charizard || !entei || !lapras || !snorlax || !feraligatr) {
        return <div>Loading...</div>;
    }

    if (arcanine && gengar && nidoking && pidgeot){
        const pokemonList = [arcanine, gengar, nidoking, pidgeot, 
            blastoise, gyarados, tyranitar, charizard, entei,
            lapras, snorlax, feraligatr]; 
        
        let tempPokemonList = [];
        let counter = 0;

        pokemonList.map((pokemon)=>{
            const pokemonObject = {
                pokemon: pokemon,
                id: counter+1 
            }
            counter = counter+1
            tempPokemonList.push(pokemonObject)
        })


        return(
            <div className="container">
                <CardContainer 
                    tempPokemonList={tempPokemonList} 
                    scoreCounter={scoreCounter} 
                    setCounter={setCounter}/>
                <ScoreContainer 
                    scoreCounter={scoreCounter}/>
            </div>
        );
    }    

}