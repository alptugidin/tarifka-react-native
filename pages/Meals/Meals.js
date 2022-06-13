import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {style} from 'app/pages/Meals/Meals.style';
import useFetch from 'app/hook/useFetch';
import {API_FILTER} from '@env';
import MealsCard from 'app/components/MealsCard/MealsCard';
import Loading from 'app/components/Loading/Loading';
import Error from 'app/components/Error/Error';
import Separator from 'app/components/Separator';
const Meals = ({route, navigation}) => {
  const {name} = route.params;

  const {data, error, loading} = useFetch(API_FILTER + name);

  const renderMealsCard = item => {
    return (
      <MealsCard
        name={item.strMeal}
        imgURL={item.strMealThumb}
        nav={navigation}
        idMeal={item.idMeal}
      />
    );
  };
  return (
    <View style={style.main}>
      {loading && <Loading />}
      {error.state ? (
        <Error />
      ) : (
        <FlatList
          data={data.meals}
          renderItem={({item}) => renderMealsCard(item)}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          ListHeaderComponent={Separator}
        />
      )}
    </View>
  );
};

export default Meals;
