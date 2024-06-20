import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const NewsDetail = ({route}) => {
  const {article} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {article.urlToImage && (
        <Image source={{uri: article.urlToImage}} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.source}>Source: {article.source}</Text>
      <Text style={styles.author}>Author: {article.author}</Text>
      <Text style={styles.date}>
        Published At: {article.publishedAt.toDateString()}
      </Text>
      <Text style={styles.description}>{article.description}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  source: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default NewsDetail;
