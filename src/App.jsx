import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){

  const [name, setName] = useState('midudev')

  return (
    <section className='App'>
      <TwitterFollowCard 
        initialIsFollowing = {true}
        userName={name}
      >
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard 
        initialIsFollowing
        userName="elonmusk" 
      >
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard 
        initialIsFollowing={false}
        userName="pheralb" 
      >
        Pablo Hernandex
      </TwitterFollowCard>

      <button
        onClick={() => setName('pedromichel')}
      >
        Cambio nombre
      </button>
    </section>
  )
}