
import './App.css'
import CharacterList from './components/CharacterList';
import { charactersData } from "./data"

function App() {

  return (
    <>

    <CharacterList data={charactersData}/>
    
    </>
  )
}

export default App
