import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../animation/27-loading.json')}
      autoPlay
    />
  );
};

export default Loading;
