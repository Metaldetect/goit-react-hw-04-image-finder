import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerContainer, Spinner } from './LoaderStyles';

function LoadingSpinner({ size }) {
  return (
    <SpinnerContainer>
      <Spinner size={size} />
    </SpinnerContainer>
  );
}

LoadingSpinner.propTypes = {
  size: PropTypes.number,
};

export default LoadingSpinner;
