import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './redux/store/news';
import {fetchNews, setSearchQuery} from './redux/thunk/news';

const styles = StyleSheet.create({});

const NewsList = ({navigation}) => {
  useEffect(() => {
    console.log('NewsList rendered');
  });
  const dispatch = useDispatch();
  const news = useSelector(state => state.posts);
  const searchQuery = useSelector(state => state.searchQuery);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const filteredPosts = news.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by title..."
        value={searchQuery}
        onChangeText={text => dispatch(setSearchQuery(text))}
      />
      <FlatList
        data={news}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetail', {news: item})}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
