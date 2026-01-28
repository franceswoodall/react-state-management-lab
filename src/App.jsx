// src/App.jsx

import('./App.css'); 
import { useState } from 'react';

const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100); 

const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]); 


const handleAddFighter = (newTeam) => {
  if (money < newTeam.price) {
    console.log('Not enough money!'); 
    return; 
  }

  const zombieTeam = [...team, newTeam] 
  setTeam(zombieTeam); 

  const remainingMoney = money - newTeam.price; 
  setMoney(remainingMoney)

  const updatedFighters = zombieFighters.filter((fighter) => fighter.id !== newTeam.id); 
  setZombieFighters(updatedFighters); 
}; 

const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0); 
const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0); 

const handleRemoveFighter = (fighterToRemove) => {
  const updatedTeam = team.filter((fighter) => fighter.id !== fighterToRemove.id); 
  setTeam(updatedTeam); 

  setZombieFighters([...zombieFighters, fighterToRemove]); 

  setMoney(money + fighterToRemove.price)
}; 


  return (
    <>
    <h1>Hello world!</h1>
    <h2>Money: £{money} </h2>
    <h3>Total Strength: {totalStrength}</h3>
    <h3>Total Agility: {totalAgility}</h3>
    <h2>Team:</h2> 
      {team.length === 0? (
        <p>Pick some team members!</p>
      ) : (
      <ul className='team-details'>
        {team.map((zombie, index) => (
          <li key={zombie.id}>
            <p>Name: {zombie.name}</p>
            <p>Price: {zombie.price}</p>
            <p>Strength {zombie.strength}</p>
            <p>Agility {zombie.agility}</p>
            <img src={zombie.img} alt={zombie.name}/>
            <button onClick={() => handleRemoveFighter(zombie)}>Remove</button>
          </li>
        ))} 
      </ul>
    )} 
      
    <ul>
      {zombieFighters.map((zombie) => (
        <li key={zombie.id}>
          <p>{zombie.name}</p>
          <p>{zombie.price}</p>
          <p>{zombie.strength}</p>
          <p>{zombie.agility}</p>
          <img src={zombie.img} alt={zombie.name} />
          <button onClick={() => handleAddFighter(zombie)}>Add Zombie</button>
        </li>
      ))}
    </ul>
    </>
  );
}; 



export default App; 

