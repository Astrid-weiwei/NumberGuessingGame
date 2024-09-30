import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './components/GameOver';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState('');

  const handleRegister = (name, email, phone) => {
    setUserData({ name, email, phone });
    setCurrentScreen('confirm');
  };

  const handleConfirmContinue = () => {
    setCurrentScreen('game');
  };

  const handleConfirmGoBack = () => {
    setCurrentScreen('start');
  };

  const handleGameOver = (reason) => {
    setIsGameOver(true);
    setGameOverReason(reason);
  };

  const handleNewGame = () => {
    setCurrentScreen('start');
    setIsGameOver(false);
    setGameOverReason('');
    setUserData({ name: '', email: '', phone: '' });
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'start' && !isGameOver && (
        <StartScreen onRegister={handleRegister} />
      )}
      {currentScreen === 'confirm' && (
        <ConfirmScreen
          name={userData.name}
          email={userData.email}
          phone={userData.phone}
          onGoBack={handleConfirmGoBack}
          onContinue={handleConfirmContinue}
        />
      )}
      {currentScreen === 'game' && !isGameOver && (
        <GameScreen phoneLastDigit={userData.phone.slice(-1)} onGameOver={handleGameOver} />
      )}
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
