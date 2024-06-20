import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArticles} from './actions/articlesActions';
import {ActivityIndicator} from 'react-native';

const NewsList = () => {
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
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Source: {item.source}</Text>
            <Text>Author: {item.author}</Text>
            <Text>Published At: {item.publishedAt.toDateString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default NewsList;
