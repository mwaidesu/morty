
import './App.css'
import CharacterList from './components/CharacterList'
// import { charactersData } from "./data"
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

function App() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });



  return (
    <div className='flex flex-wrap justify-center'>
    <ApolloProvider client={client}>

    <CharacterList/>

    </ApolloProvider>
    
    </div>
  )
}

export default App
