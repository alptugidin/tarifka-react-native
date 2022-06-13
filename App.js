import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from 'app/pages/Categories/Categories';
import {colors} from 'app/colors';
import Meals from 'app/pages/Meals/Meals';
import Detail from 'app/pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerShown: true,
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: colors.orange400,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
