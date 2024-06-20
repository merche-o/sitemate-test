import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArticles} from './actions/articlesActions';
import {ActivityIndicator} from 'react-native';
import {newsListStyle as styles} from '../../style/news_list';
export const NewsList = ({navigation}) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles.articles);
  const loading = useSelector(state => state.articles.loading);
  const error = useSelector(state => state.articles.error);

  const handleSearch = () => {
    dispatch(fetchArticles(query));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for articles..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {loading && <ActivityIndicator />}
      {error && <Text>Error: {error}</Text>}
      <FlatList
        data={articles}
        keyExtractor={item => item.url}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('NewsDetail', {article: item})}>
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>Source: {item.source}</Text>
              <Text>Author: {item.author}</Text>
              <Text>Published At: {item.publishedAt.toDateString()}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
