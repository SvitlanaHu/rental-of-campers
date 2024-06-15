import PropTypes from 'prop-types';

function DisplayNumber({ number }) {
  return (
    <span>
      {number.toFixed(2)}
    </span>
  );
}

DisplayNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default DisplayNumber;