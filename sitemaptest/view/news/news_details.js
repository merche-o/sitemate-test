import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {newsDetailsStyle as styles} from '../../style/news_details';
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

export default NewsDetail;
