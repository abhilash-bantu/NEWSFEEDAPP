
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import useFetchNews from '../hooks/useFetchNews';
import NewsItem from '../components/NewsItem';
import SwipeButton from '../components/SwipeButton';

const NewsFeedScreen: React.FC = () => {
  const [fetchNews, setFetchNews] = useState(false);
  const { news, isLoading, isError } = useFetchNews();

  const handleSwipeComplete = () => {
    setFetchNews(true);
  };

  return (
    <View style={styles.container}>
      {!fetchNews && <SwipeButton onSwipeComplete={handleSwipeComplete} />}
      {fetchNews && (
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <NewsItem
              title={item.title}
              source={item.source.name}
              summary={item.description}
              imageUrl={item.urlToImage}
            />
          )}
          keyExtractor={item => item.title}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default NewsFeedScreen;
