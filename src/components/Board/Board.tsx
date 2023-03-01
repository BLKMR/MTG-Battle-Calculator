import { Creature } from "../../models/Creature";
import useFetch from "../../services/api";
import CreateCreature from "./Creatures/CreateCreature";





const Board = () => {
    return(
    <div className="Board">
    <div className="Card">
        <h1>Creature Name</h1>
        <h2>0/0</h2>
    </div>

    </div>
    
    );
}
 
export default Board;