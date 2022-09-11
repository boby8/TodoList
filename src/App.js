import React, { useState } from "react";
import "./App.css";
import Listcompo from "./Listcompo";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  //add your items
  function addNames(e) {
    e.preventDefault();
    if (name != "") {
      setNames([...names, { name }]);
      setName("");
    }
  }

  //delete your item
  const delItems = (id) => {
    const updatedItems = names.filter((ele, ind) => {
      return ind !== id;
    });
    setNames(updatedItems);
  }; 
  //edit your item
  const editItem = (iid) => {
    let editedItem = names.filter((elem, idx) => {
      if (idx == iid) {
        console.log(elem);
        return elem;
      }
    });
    setNames(editedItem);
  };

  return (
    <div >
      <h1>TODO LIST</h1>
      <p>Things TODO</p>
      <form>
        <input
          type="text"
          value={name}
          placeholder="add your Things todo"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addNames}>Add</button>
      </form>
      <hr />
      <ol>
        {names.map((item, index) => {
          return (
            <Listcompo
              text={item.name}
              deleteItem={delItems}
              idx={index}
              edit={editItem}
              arr={name}
              arr1={setName}
              arrs={names}
              arrs1={setNames}
              
            />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
