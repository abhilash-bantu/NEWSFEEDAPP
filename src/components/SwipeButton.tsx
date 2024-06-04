
import React, { useState } from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';

interface SwipeButtonProps {
  onSwipeComplete: () => void;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({ onSwipeComplete }) => {
  const [swipeCompleted, setSwipeCompleted] = useState(false);
  const pan = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x }], { useNativeDriver: false }),
    onPanResponderRelease: (e, { dx }) => {
      if (dx > 200) { // Adjust this value based on your design
        setSwipeCompleted(true);
        onSwipeComplete();
      } else {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.swipeButton]}>
        <View style={styles.button} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center',
  },
  swipeButton: {
    position: 'absolute',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#f00',
    borderRadius: 25,
  },
});

export default SwipeButton;
