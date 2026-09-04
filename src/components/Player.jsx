import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [namePlayer, setNamePlayer] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let editablePlayer = <span className="player-name">{namePlayer}</span>;

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setNamePlayer(event.target.value);
  }
  if (isEditing) {
    editablePlayer = (
      <input type="text" required value={namePlayer} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
