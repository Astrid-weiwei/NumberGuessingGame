import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card';
import CustomButton from './CustomButton';

const GameOver = ({ reason, onNewGame }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.gameOverText}>The game is over!</Text>
        <Image source={require('../assets/sad_smiley.png')} style={styles.image} />
        <Text style={styles.reasonText}>{reason}</Text>
        <CustomButton title="New Game" color="blue" onPress={onNewGame} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 24,
    color: 'purple',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  reasonText: {
    fontSize: 18,
    color: 'purple',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default GameOver;
