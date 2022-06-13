import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {style} from 'app/components/MealsCard/MealsCard.style';

const MealsCard = ({name, imgURL, nav, idMeal}) => {
  const onPress = () => {
    nav.navigate('Detail', {id: idMeal});
  };
  return (
    <TouchableHighlight onPress={onPress} style={style.touchable}>
      <View style={style.main}>
        <Image source={{uri: imgURL}} style={style.image} />
        <View style={style.textView}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[style.text, name.length < 35 && style.shortText]}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default MealsCard;
