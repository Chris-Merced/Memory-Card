export function Card({pokemon, clickHandler}){
    const cardPokemon = pokemon.pokemon;
    
    return (
        <div className="card" onClick={clickHandler(pokemon.id)}>     
            {cardPokemon.sprites.front_default ? (
                <img src={cardPokemon.sprites.front_default} alt={cardPokemon.name}></img>
            ) : (
                <div>...loading</div>
            )}
            <div className="name">{(cardPokemon.name).slice(0,1).toUpperCase() + (cardPokemon.name).slice(1, (cardPokemon.name).length)}</div>
        </div>
    )
}