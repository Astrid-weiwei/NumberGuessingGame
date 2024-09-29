import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './components/GameOver';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState('');

  const handleRegister = () => {
    setIsGameStarted(true);
  };

  const handleGameOver = (reason) => {
    setIsGameOver(true);
    setGameOverReason(reason);
  };

  const handleNewGame = () => {
    setIsGameStarted(false);
    setIsGameOver(false);
    setGameOverReason('');
    // Additional reset logic, if needed
  };

  return (
    <View style={styles.container}>
      {!isGameStarted && !isGameOver && <StartScreen onRegister={handleRegister} />}
      {isGameStarted && !isGameOver && <GameScreen onGameOver={handleGameOver} />}
      {isGameOver && <GameOver reason={gameOverReason} onNewGame={handleNewGame} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 0,
    margin: 0,
  },
});
