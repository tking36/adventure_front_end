import {useState} from 'react'

interface Props {
    handleCreate: (newAdv: Adventure) => any;
}

interface Adventure {
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number
}

interface FormValues {
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number
}


const Add: React.FC<Props> = ({ handleCreate }) => {
    const [formValues, setFormValues] = useState<FormValues>({
    health: 0,
    attack: 0,
    accuracy: 0,
    weapons: 0,
    items: 0,
    villains: 0
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreate(formValues);
    setFormValues({
        health: 0,
        attack: 0,
        accuracy: 0,
        weapons: 0,
        items: 0,
        villains: 0
    });
    };

    return (
    <form onSubmit={handleSubmit}>
    <label>
    Health:
    <input
    type="number"
    name="health"
    value={formValues.health}
    onChange={handleChange}
    />
    </label>
    <br />
    <label>
          Attack:
          <input
            type="number"
            name="attack"
            value={formValues.attack}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Accuracy:
          <input
            type="number"
            name="accuracy"
            value={formValues.accuracy}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Weapons:
          <input
            type="number"
            name="weapons"
            value={formValues.weapons}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Items:
          <input
            type="number"
            name="items"
            value={formValues.items}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Villains:
          <input
            type="number"
            name="villains"
            value={formValues.villains}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Adventure</button>
      </form>
    );
  };

  export default Add
  