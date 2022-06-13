import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

const Separator = () => {
  return <View style={style.main} />;
};

const style = StyleSheet.create({
  main: {
    padding: 8,
  },
});

export default Separator;
