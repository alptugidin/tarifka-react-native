import React from 'react';
import {FlatList, View} from 'react-native';
import {style} from 'app/pages/Categories/Categories.style';
import Card from 'app/components/Card/Card';
import useFetch from 'app/hook/useFetch';
import Separator from 'app/components/Separator';
import Loading from 'app/components/Loading/Loading';
import Error from 'app/components/Error/Error';
import {API_CAT} from '@env';

const Categories = ({navigation}) => {
  const {data, error, loading} = useFetch(API_CAT);
  const renderCard = item => {
    return (
      <Card
        name={item.strCategory}
        imgUrl={item.strCategoryThumb}
        nav={navigation}
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
          ListHeaderComponent={Separator}
          ListFooterComponent={Separator}
          ItemSeparatorComponent={Separator}
          data={data.categories}
          renderItem={({item}) => renderCard(item)}
        />
      )}
    </View>
  );
};

export default Categories;
