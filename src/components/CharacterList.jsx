import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Card from "./Card";

const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        image
        gender
        species
        status
        origin {
        id
        name
      }
      }
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(character => (

    <div key={character.id} className="mt-4">
      <Card        
        id={character.id}
        image={character.image}
        name={character.name}
        gender={character.gender}
        origin={character.origin.name}
        species={character.species}
        status={character.status}
      />
    </div>
  ));
};

export default CharactersList;

