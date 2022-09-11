import React, { useState } from "react";

export default function Listcompo(props) {
  const [checked, setChecked] = useState(false);
  const [edits, setEdits] = useState(false);

  const updateEditedValue = (e) => {
    let val = e.target.value;
    editingItem(props.idx, val);
  };

  const editingItem = (iid, val) => {
    let editedItem = props.arrs.filter((elem, idx) => {
      if (idx == iid) {
        console.log(elem);
        return (elem.name = val);
      } else {
        return elem.name;
      }
    });
    props.arrs1(editedItem);
  };

  //edit to set true and false
  const editItem = () => {
    if (edits == true) {
      setEdits(false);
    } else {
      setEdits(true);
    }
  };

  const cutItem = () => {
    if (checked == false) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <div>
      <li style={{ textDecoration: checked ? "line-through" : "none" }}>
        <input type="checkbox" onChange={cutItem} />
        {edits == false ? (
          `${props.text}`
        ) : (
          <input
            type="text"
            defaultValue={props.text}
            onChange={updateEditedValue}
          />
        )}
        <button onClick={editItem}>EDIT</button>
        <button onClick={() => props.deleteItem(props.idx)}>DEL</button>
      </li>
    </div>
  );
}
