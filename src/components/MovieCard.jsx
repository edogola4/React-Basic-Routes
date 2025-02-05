import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function MovieCard({title, id}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
};
MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default MovieCard;