// screens/GameScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Image } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const GameScreen = ({ phoneLastDigit, onRestart }) => {
  const [chosenNumber, setChosenNumber] = useState(null);
  const [attemptsLeft, setAttemptsLeft] = useState(4);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [timer, setTimer] = useState(60);
  const [inputValue, setInputValue] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [showResultCard, setShowResultCard] = useState(false);
  const [correctGuess, setCorrectGuess] = useState(false);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const timerId = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(timerId);
    } else if (timer === 0) {
      setIsGameOver(true);
      setGameOverReason('You are out of time.');
    }
  }, [gameStarted, timer]);

  useEffect(() => {
    if (!chosenNumber) {
      setChosenNumber(getRandomNumber(phoneLastDigit));
    }
  }, [phoneLastDigit]);

  const getRandomNumber = (lastDigit) => {
    const multiples = [];
    for (let i = 1; i <= 100; i++) {
      if (i % lastDigit === 0) {
        multiples.push(i);
      }
    }
    return multiples[Math.floor(Math.random() * multiples.length)];
  };

  const startGameHandler = () => {
    setGameStarted(true);
    setTimer(60);
    setAttemptsLeft(4);
    setAttemptsUsed(0);
    setHintUsed(false);
    setInputValue('');
    setShowResultCard(false);
    setCorrectGuess(false);
    setIsGameOver(false);
    setGameOverReason('');
    setChosenNumber(getRandomNumber(phoneLastDigit)); // Reset chosen number
  };

  const submitGuessHandler = () => {
    const guessedNumber = parseInt(inputValue);
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      Alert.alert('Invalid input', 'Please enter a number between 1 and 100.');
      return;
    }

    setAttemptsUsed((prev) => prev + 1);

    if (guessedNumber === chosenNumber) {
      setCorrectGuess(true);
      setIsGameOver(true);
    } else {
      setAttemptsLeft((prev) => prev - 1);
      setShowResultCard(true);
      if (attemptsLeft <= 1) {
        setIsGameOver(true);
        setGameOverReason('You are out of attempts.');
      } else {
        setResultMessage(guessedNumber > chosenNumber ? 'Guess lower!' : 'Guess higher!');
      }
    }
  };

  const tryAgainHandler = () => {
    setShowResultCard(false);
    setInputValue('');
  };

  const useHintHandler = () => {
    if (!hintUsed) {
      Alert.alert('Hint', `The number is ${chosenNumber > 50 ? 'greater than 50' : 'less than or equal to 50'}.`);
      setHintUsed(true);
    } else {
      Alert.alert('Hint', 'You have already used the hint.');
    }
  };

  const newGameHandler = () => {
    startGameHandler(); // Reuse startGameHandler to reset game state
  };

  const handleEndGame = () => {
    setGameOverReason('You ended the game.');
    setIsGameOver(true);
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Restart" onPress={startGameHandler} />
      {!gameStarted && !isGameOver && (
        <Card>
          <Text style={styles.text}>
            You have 60 seconds and 4 attempts to guess a number that is a multiple of the last digit of your phone number between 1 and 100.
          </Text>
          <CustomButton title="Start" color="blue" onPress={startGameHandler} />
        </Card>
      )}
      {gameStarted && !isGameOver && !showResultCard && (
        <Card>
          <TextInput
            style={styles.input}
            placeholder="Enter your guess"
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="numeric"
            textAlign="center"
          />
          <Text>Attempts left: {attemptsLeft}</Text>
          <Text>Timer: {timer}s</Text>
          <CustomButton title="Use a Hint" color="blue" onPress={useHintHandler} />
          <CustomButton title="Submit guess" color="blue" onPress={submitGuessHandler} />
        </Card>
      )}
      {showResultCard && !isGameOver && (
        <Card>
          <Text>{resultMessage}</Text>
          <CustomButton title="Try Again" color="blue" onPress={tryAgainHandler} />
          <CustomButton title="End the game" color="red" onPress={handleEndGame} />
        </Card>
      )}
      {isGameOver && (
        <Card>
          <Text>The game is over!</Text>
          <Image source={require('../assets/sad_smiley.png')} style={styles.image} />
          <Text>{gameOverReason}</Text>
          <CustomButton title="New Game" color="blue" onPress={newGameHandler} />
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 0,
    margin: 0,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    padding: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'purple',
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    alignSelf: 'center',
  },
  cardContent: {
    alignItems: 'center', // Center content within the card
  },
});

export default GameScreen;
