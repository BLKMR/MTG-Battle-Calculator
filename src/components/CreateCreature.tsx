import { useState } from "react";
import Board from "./Board";

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

        setNewCreature({ name: creatureName, power: power, toughness: toughness, id: 0})
        console.log(newCreature )


        const clearCreatureState = () => {
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
        }
       
        fetch('http://localhost:8000/creatures',
        {
            method: 'Post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCreature)
        }).then(() => {
            console.log('new creature added', newCreature);
            clearCreatureState;
        })
             
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreatureName(event.target.value)
      }

      const addPower = (event: React.MouseEvent) => {
        setPower(power + 1);
    }
    const subtractPower = (event: React.MouseEvent) => {
        if(power === 0) {
            return;
        }
        setPower(power - 1);
    }  

    const addToughness = (event: React.MouseEvent) => {
        setToughness(toughness + 1);
    }
    const subtractToughness = (event: React.MouseEvent) => {
        if(toughness === 0) {
            return;
        }
        setToughness(toughness - 1);
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
        <button className="power-button" onClick={ subtractPower }>-</button>
        <button className="power-button" onClick={ addPower }>+</button>
        { power } / 
        { toughness }
        <button className="toughness-button" onClick={ subtractToughness } >-</button>
        <button className="toughness-button" onClick={ addToughness }>+</button>
        </p>        
    </div>
    <button  onClick={ handleSubmit }>Add Creature</button>
    <br/>
    <h2>Preview: { creatureName } </h2>
    <h4>{ power } / { toughness } </h4>
    <Board />
  </div>

);
}

 
export default CreateCreature;