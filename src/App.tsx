import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Middle from "./components/Middle";
import Left from "./components/Left";
import Bottom from "./components/Bottom";

const App: React.FC = () => {
  interface Adventure {
    id: number;
    health: number;
    attack: number;
    accuracy: number;
    weapons: number;
    items: number;
    villains: number;
  }

  const [page, setPage] = useState<boolean>(false);
  const [adventure, setAdventure] = useState<Adventure[]>([]);
  const [hasStarted, setHasStarted] = useState<boolean>(true);

  const Space = require("./components/video/space.mp4");

  //////////////////////Game Variables///////////////////////
  const [health, setHealth] = useState<number>(100);
  const [attack, setAttack] = useState<number>(10);
  const [accuracy, setAccuracy] = useState<number>(1);
  const [items, setItems] = useState<[number, string][]>([
    [10, "Health Mixture +10"],
    [5, "Laser Upgrade +5"],
  ]);
  const [villains, setVillains] = useState<[number, number, string][]>([
    [30, 10, "Maldroid"],
    [40, 15, "Zetan Warrior"],
    [40, 20, "Elki"],
  ]);
  const [level, setLevel] = useState<number>(0);
  const [shopOpen, setShopOpen] = useState<boolean>(true);
  const [bank, setBank] = useState<number>(0);
  const [resources, setResources] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [choice, setChoice] = useState<number>(0);
  const [battle, setBattle] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [userAttackMessage, setUserAttackMessage] = useState<string>("");
  const [villainAttackMessage, setVillainAttackMessage] = useState<string>("");
  const [ignite, setIgnite] = useState<boolean>(true);

  //////////////////////Game Variables///////////////////////

  // const getAdventures = () => {
  //   axios.get('https://adventure-back-end.herokuapp.com/api/adventure')
  //   .then((response) => setAdventure(response.data),
  //     (err) => console.error(err))
  //   .catch((error) => console.error(error))
  //   }

  // const handleCreate = (newAdv:Adventure): any =>  {
  //   axios.post("https://adventure-back-end.herokuapp.com/api/adventure", newAdv)
  //   .then((res) => {
  //     console.log(res.data)
  //     setAdventure(adventure.concat(res.data))

  //   })
  // }

  // const handleUpdate = (editAdventure:Adventure): any => {
  //   console.log(editAdventure)
  //   axios.put("https://adventure-back-end.herokuapp.com/api/adventure/" + editAdventure.id, editAdventure)
  //     .then((response) => {
  //       getAdventures()
  //     })
  // }

  // const handleDelete = (data:Adventure) => {
  //   axios.delete("https://adventure-back-end.herokuapp.com/api/adventure/" + data.id)
  //   .then((res) => {
  //     getAdventures()
  //   })
  //   .catch((err) => console.log(err))
  // }

  ////////////////Battle/////////////////

  const handleBattle = () => {
    setBattle(true);
    const villain = villains[0];
    const missChance = 1 - accuracy;
    const hitChance = Math.random();

    if (hitChance > missChance) {
      const userAttack = Math.floor(
        Math.random() * (attack - attack / 2) + attack / 2
      );
      setVillains((prevVillains) => {
        prevVillains[0][0] = prevVillains[0][0] - userAttack;
        return prevVillains;
      });
      setUserAttackMessage(
        "You attacked and dealt " + userAttack + " damage " + "to the Alien."
      );
      if (villain[0] <= 0) {
        setUserAttackMessage("You have defeated the villain!");
        setBattle(false);
        setChoice(0);
      }
    } else {
      setUserAttackMessage("Your attack missed!");
    }
    // Villain counter attack
    if (villain[0] > 0) {
      const villainAttack = Math.floor(
        Math.random() * (villain[1] - villain[1] / 2) + villain[1] / 2
      );
      const counterMissChance = 1 - accuracy;
      const counterHitChance = Math.random();
      if (counterHitChance > counterMissChance) {
        setHealth(health - villainAttack);
        setVillainAttackMessage(
          "The villain counter attacked and dealt " + villainAttack + " damage."
        );
        if (health <= 0) {
          setVillainAttackMessage("You lost the battle");
          setBattle(false);
        }
      } else {
        setVillainAttackMessage("The villain's counter attack missed!");
      }
    }
  };

  ////////////////Battle/////////////////

  // useEffect(() => {
  //   getAdventures();
  // }, []);

  return (
    <div className="App container-fluid">
      {hasStarted ? (
        <>
          <h1 className="small">Window Must Be Larger</h1>
          <video className="space-video" autoPlay loop muted>
            <source src={Space} type="video/mp4" />
          </video>
          <div className="start-container">
            <div className="start-title ">Space Invaders</div>
            <div
              className="start-text"
              onClick={() => {
                setHasStarted(false);
                setHealth(adventure[0].health);
                setAccuracy(adventure[0].accuracy);
                setAttack(adventure[0].attack);
              }}
            >
              Start Game
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main container-fluid">
            <Left
              health={health}
              setHealth={setHealth}
              attack={attack}
              setAttack={setAttack}
              level={level}
              setLevel={setLevel}
              name={name}
              setName={setName}
              choice={choice}
              resources={resources}
              setResources={setResources}
              battle={battle}
              setBattle={setBattle}
              villains={villains}
              setVillains={setVillains}
              shopOpen={shopOpen}
              setShopOpen={setShopOpen}
              visible={visible}
              setVisible={setVisible}
              ignite={ignite}
              setIgnite={setIgnite}
            />

            <div className="right">
              <Middle
                setPage={setPage}
                page={page}
                villains={villains}
                setVillains={setVillains}
                level={level}
                setLevel={setLevel}
                shopOpen={shopOpen}
                setShopOpen={setShopOpen}
                bank={bank}
                setBank={setBank}
                resources={resources}
                setResources={setResources}
                items={items}
                setItems={setItems}
                health={health}
                setHealth={setHealth}
                attack={attack}
                setAttack={setAttack}
                accuracy={accuracy}
                setAccuracy={setAccuracy}
                battle={battle}
                setBattle={setBattle}
                handleBattle={handleBattle}
                visible={visible}
                setVisible={setVisible}
                userAttackMessage={userAttackMessage}
                setUserAttackMessage={setUserAttackMessage}
                villainAttackMessage={villainAttackMessage}
                setVillainAttackMessage={setVillainAttackMessage}
                choice={choice}
                setChoice={setChoice}
                ignite={ignite}
                setIgnite={setIgnite}
              />

              <Bottom
                villains={villains}
                setVillains={setVillains}
                level={level}
                setLevel={setLevel}
                shopOpen={shopOpen}
                setShopOpen={setShopOpen}
                setBank={setBank}
                resources={resources}
                setResources={setResources}
                setItems={setItems}
                health={health}
                setHealth={setHealth}
                attack={attack}
                setAttack={setAttack}
                setName={setName}
                choice={choice}
                setChoice={setChoice}
                battle={battle}
                setBattle={setBattle}
                handleBattle={handleBattle}
                visible={visible}
                setVisible={setVisible}
                ignite={ignite}
                setIgnite={setIgnite}
              />
            </div>
          </div>
          <h1 className="small">Window Must Be Larger</h1>
        </>
      )}
    </div>
  );
};

export default App;
