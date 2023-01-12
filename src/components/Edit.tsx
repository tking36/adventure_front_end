import React, { useState, useEffect } from 'react'


interface Props {
  handleUpdate: (editAdventure:Adventure) => any
  getAdventures: () => any
  setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
  id: number;
  adventure: Adventure[]
  index:number
}

interface Adventure {
    id:number;
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number
}



const Edit: React.FC<Props> = (props) => {

    // const myID = [props.id as keyof typeof setAdventure]
    const [adventure, setAdventure] = useState<Adventure[]>(props.adventure)
    const [id, setId] = useState(props.id)
    const [index, setIndex] = useState(props.index)
    
   

    console.log(adventure);

    
    
    const [editAdventure, setEditAdventure] = useState<Adventure>({
        id: adventure[index].id,
        health: adventure[index].health,
        attack: adventure[index].attack,
        accuracy: adventure[index].accuracy,
        weapons: adventure[index].weapons,
        items: adventure[index].items,
        villains: adventure[index].villains
      });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditAdventure({ ...editAdventure, [name]: value });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleUpdate(editAdventure);
    console.log(setAdventure);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>{adventure[0].id}</h1>
        <label>
            Health:
            <input type="number" name="health" value={editAdventure.health} onChange={handleChange}/>
        </label>
        <br />
        <label>
            Attack:
            <input type="number" name="attack" value={editAdventure.attack} onChange={handleChange}/>
        </label>
        <br />
        <label>
            Accuracy:
            <input type="number" name="accuracy" value={editAdventure.accuracy} onChange={handleChange}/>
        </label>
        <br />
        <label>
            Weapons:
            <input type="number" name="weapons" value={editAdventure.weapons} onChange={handleChange}/>
        </label>
        <br />
            <label>
            Items:
            <input type="number" name="items" value={editAdventure.items} onChange={handleChange} />
        </label>
        <br />
        <label>
            Villains:
            <input type="number" name="villains" value={editAdventure.villains} onChange={handleChange}/>
        </label>
        <br />
        <button type="submit">Save</button>
    </form>
  );
}

export default Edit;
