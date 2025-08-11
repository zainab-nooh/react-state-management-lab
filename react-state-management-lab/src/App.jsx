import { useState } from 'react'
import ZombieFighter from './components/ZombiFighters/ZombiFighters'
import './App.css'

function App() {
  const [money, setMoney] = useState(100)
  const [teamStrength, setTeamStrength] = useState(0)
  const [teamAgility, setTeamAgility] = useState(0)
  const [team, setTeam] = useState([])

  const zombieFighters = [
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
  ]

  const handleRemoveFighter = (fighter) => {
    setTeam(team => team.filter(f => f.id !== fighter.id))
    setMoney(money + fighter.price)
    setTeamStrength(teamStrength - fighter.strength)
    setTeamAgility(teamAgility - fighter.agility)
  }

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      alert('Not Enough Money')
    } else {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      setTeamStrength(teamStrength + fighter.strength)
      setTeamAgility(teamAgility + fighter.agility)
    }
  }

  return (
    <>
      <h1>Zombi Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {teamStrength}</h3>
      <h3>Team Agility: {teamAgility}</h3>
      <h3>Team</h3>
      {
        team.length === 0 ? (<p>Pick some team members</p>) :
          (<ul className="fighters-list">
            {team.map((fighter, index) => (
              <li key={index} className="fighter-card">
                <ZombieFighter
                  img={fighter.img}
                  name={fighter.name}
                  price={fighter.price}
                  strength={fighter.strength}
                  agility={fighter.agility}
                />
                <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
              </li>
            ))}
          </ul>)
      }
      <h3>Fighters</h3>
      <section>
        <ul className='fighters-list'>
          {zombieFighters.map((fighter) => (
            <li key={fighter.id} className='fighter-card'>
              <ZombieFighter
                img={fighter.img}
                name={fighter.name}
                price={fighter.price}
                strength={fighter.strength}
                agility={fighter.agility}
              />
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default App