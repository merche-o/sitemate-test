import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './redux/store/news';
import NewsList from './news_list';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    console.log('NewsScreen rendered');
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NewsList">
          <Stack.Screen
            name="NewsList"
            component={NewsList}
            options={{title: 'News'}}
          />
          {/* <Stack.Screen
            name="NewsDetials"
            component={NewsDetail}
            options={{title: 'News Details'}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
