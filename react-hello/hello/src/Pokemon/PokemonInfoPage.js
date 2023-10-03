import { useEffect, useState } from "react"

function PokemonInfoPage(){
    const [selectedPokemon,setSelectedPokemon] = useState()
    const [selectPokemon,setSelectedPOkemon]=useState('ditto');

    const url=`https://pokeapi.co/api/v2/pokemon/${selectPokemon}`

    function convertJasonToRelevantData(data){
        const {id,name,height,weight,abilities}=data;
        const abilityString=abilities.map(ability => {
            return ability.ability.name;
        }).join(", ")
        return{
            id,
            name,
            weight,
            height,
            abilityString
        }
    }

    function handleChoice(event){
        const value=event.target.value;
        setSelectedPOkemon(value);
    }

    useEffect(()=>{
        fetch(url).then((response)=>response.json()).then((data)=>{
            const convertData=convertJasonToRelevantData(data)
            console.log(convertData)
            setSelectedPokemon(convertData)
        },[selectPokemon])
    })


    return(
        <>
        <div>
            <h3>Select Pokemon</h3>
            <select onClick={handleChoice}>
                <option value="ditto">Ditto</option>
                <option value="pikachu">Pikachu</option>
                <option value="bulbasaur">balbasor</option>
                <option value="vulpix">Vulpix</option>
            </select>
        </div>
        <br/>
        <div style={{height:"100px",width:"500px",border:"2px solid black"}}>
            <div>Name      : {selectedPokemon?.name}</div>
            <div>Height    : {selectedPokemon?.height}</div>
            <div>Weight    : {selectedPokemon?.weight}</div>
            <div>Abilities : {selectedPokemon?.abilityString}</div>
        </div>
        </>
    )
}
export default PokemonInfoPage