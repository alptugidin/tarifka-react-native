import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Error = () => {
  return (
    <AnimatedLottieView
      source={require('../../animation/94900-error.json')}
      autoPlay
    />
  );
};

export default Error;
