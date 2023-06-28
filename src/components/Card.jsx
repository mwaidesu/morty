import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white w-80 min-h-full m-4">
        <img
          className="w-full"
          src={props.image}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-base">
           {props.status}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.origin}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.species}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.gender}
          </span>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  gender: PropTypes.string,
}

export default Card;
