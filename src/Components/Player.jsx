import { useState } from "react";

export default function Player(props) {

    const [playerName, setPlayerName] = useState(props.name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevState) => !prevState);
        if(isEditing) {
            props.onChangeName(props.symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type="text" required value = {playerName} onChange = {handleChange}/>;
    }

    return (
        <li className={props.isActive? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{props.symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
        </li>
    );
}