// App.js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <View style={styles.container}>
      {!isRegistered && <StartScreen onRegister={handleRegister} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
