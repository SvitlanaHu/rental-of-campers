import PropTypes from 'prop-types';

function DisplayNumber({ number }) {
  return (
    <div>
      {number.toFixed(2)}
    </div>
  );
}

DisplayNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default DisplayNumber;