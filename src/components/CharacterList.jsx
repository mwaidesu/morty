
import Card from "./Card";
import PropTypes from 'prop-types'


export default function charactersList(props) {

  const charactersList = props.data.map(character => (
    <Card
      key={character.id}
      id={character.id}
      image={character.image}
      name={character.name}
      gender={character.gender}
      origin={character.origin}
      species = {character.species}
      status = {character.status}

    />
  ));

  return <div className="flex flex-wrap">{charactersList}</div>;
}

charactersList.propTypes = {
    data: PropTypes.string.isRequired,
  }
