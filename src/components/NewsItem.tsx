
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface NewsItemProps {
  title: string;
  source: string;
  summary: string;
  imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, source, summary, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>{source}</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  source: {
    fontSize: 14,
    color: 'grey',
  },
  summary: {
    fontSize: 14,
  },
});

export default NewsItem;
