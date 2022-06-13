import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {style} from 'app/components/Card/Card.style';

const Card = ({name, imgUrl, nav}) => {
  const onPress = () => {
    nav.navigate('Meals', {
      name: name,
    });
  };

  return (
    <TouchableHighlight
      style={style.touchable}
      activeOpacity={0.8}
      underlayColor="#71717a"
      onPress={onPress}>
      <View style={style.main}>
        <View style={style.imageView}>
          <Image source={{uri: imgUrl}} style={style.image} />
        </View>
        <View style={style.infoView}>
          <Text style={style.name}>{name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Card;
