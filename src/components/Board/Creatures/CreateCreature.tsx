import { useState } from "react";
import Board from "../Board";

const CreateCreature = () => {

    const [newCreature, setNewCreature] = useState({
        name: "",
        power: 0,
        toughness: 0,
        id: 0,
    })
    const  [creatureName, setCreatureName] = useState('');
    const [power, setPower] = useState(0);
    const [toughness, setToughness] = useState(0);

    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(creatureName, power, toughness)

        /*const clearCreatureState = () => {
            const blankCreature = {
                name: "",
                power: 0,
                toughness: 0,
                id: 0,
            };
            setNewCreature({ ...blankCreature });
            setCreatureName('');
            setPower(0);
            setToughness(0);         
        } */
       
        fetch('http://localhost:8000/creatures',
        {
            method: 'Post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({creatureName, power, toughness})
        }).then(() => {
            console.log('new creature added', creatureName, power, toughness);
            //clearCreatureState;
        })
             
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreatureName(event.target.value)
        console.log(creatureName)
      }

      const addPower = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setPower(power + 1);
        console.log( power );
    }
    const subtractPower = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(power ===  0) {
            return;
        }
        setPower(power - 1);
        console.log( power );
    }  

    const addToughness = (event: React.MouseEvent<HTMLButtonElement>) => {
        setToughness(toughness + 1);
        console.log( toughness );
    }
    const subtractToughness = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(toughness === 0) {
            return;
        }
        setToughness(toughness - 1);
        console.log( toughness );
    }

    
    return (
    <div className="create-creature">
                <label>Creature:</label>
                <br/>
                <input
                    type="text"
                    required
                    value={ creatureName }
                    onChange={ onChange }
                     />
    <div className="power-toughness">
        <p>          
        <button className="power-button" value={ power } onClick={ subtractPower }>-</button>
        <button className="power-button" value={ power } onClick={ addPower }>+</button>
        { power } / 
        { toughness }
        <button className="toughness-button" value = { toughness } onClick={ subtractToughness } >-</button>
        <button className="toughness-button" value = { toughness } onClick={ addToughness }>+</button>
        </p>        
    </div>
    <br/>
    <button type="submit" onClick={ handleSubmit }>Add Creature</button>
    <br/>
    <h2>Preview: { creatureName } </h2>
    <h4>{ power } / { toughness } </h4>
  </div>

);
}

 
export default CreateCreature;