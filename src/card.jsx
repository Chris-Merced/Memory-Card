export function Card({pokemon, clickHandler}){
    const cardPokemon = pokemon.pokemon;
    

    return (
        <div className="card" onClick={clickHandler(pokemon.id)}>     
            <img src={cardPokemon.sprites.front_default}></img>
            <div className="name">{(cardPokemon.name).slice(0,1).toUpperCase() + (cardPokemon.name).slice(1, (cardPokemon.name).length)}</div>
        </div>
    )
}