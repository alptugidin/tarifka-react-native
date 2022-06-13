import React from 'react';
import {Button, Image, Linking, ScrollView, Text, View} from 'react-native';
import {style} from 'app/pages/Detail/Detail.style';
import useFetch from 'app/hook/useFetch';
import {API_LOOKUP} from '@env';
import Loading from 'app/components/Loading/Loading';
import Error from 'app/components/Error/Error';
const Detail = ({route}) => {
  const {id} = route.params;
  const {data, error, loading} = useFetch(API_LOOKUP + id);

  const onPress = async () => {
    await Linking.openURL(data.meals[0].strYoutube);
  };

  return (
    <View style={style.main}>
      {error.state ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <ScrollView style={style.main}>
          <View style={style.imageView}>
            <Image
              source={{uri: data.meals[0].strMealThumb}}
              style={style.image}
            />
          </View>
          <View style={style.infoView}>
            <View style={style.headerView}>
              <Text style={style.headerText}>{data.meals[0].strMeal}</Text>
              <Text style={style.headerOrigin}>{data.meals[0].strArea}</Text>
            </View>
            <Text style={style.description}>
              {data.meals[0].strInstructions}
            </Text>
          </View>
          <View style={style.buttonView}>
            <Button onPress={onPress} title="Watch On Youtube" color="red" />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Detail;
