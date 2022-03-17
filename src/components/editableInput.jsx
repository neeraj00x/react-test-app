import { useState } from "react";

export default function EditableFeild({title, name}){
    const [isEditable, setIsEditable] = useState(false)
    const [newName, setNewName] = useState(name);

    return(
        <div className="rows">
            <div className="title">{title}</div>
            {!isEditable && <div className="data">{newName}</div>}
            {isEditable && <input className="data" value={newName} onChange={(e)=>setNewName(e.target.value)}></input>}
            <button className="button" onClick={function(){setIsEditable(!isEditable)}}>{isEditable ? "Save":"Edit"}</button>
        </div>
    )
}