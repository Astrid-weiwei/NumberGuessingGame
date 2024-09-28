// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import StartScreen from './screens/StartScreen'; // Ensure this path is correct
// import CustomButton from './components/CustomButton'; // Assuming CustomButton is a default export

// export default function App() {
//   const handleRegister = () => {
//     console.log('Registration successful!');
//   };

//   return (
//     <View style={styles.container}>
//       {/* <CustomButton title="Press me" onPress={() => console.log('Button pressed')} /> */}
//       <StartScreen onRegister={handleRegister} />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StartScreen from './screens/StartScreen';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleRegister = () => {
    setIsGameStarted(true); // Update state to move to the next screen (in future steps)
  };

  return (
    <View style={styles.container}>
      {!isGameStarted && <StartScreen onRegister={handleRegister} />}
      {/* In future steps, add GameScreen here based on isGameStarted */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
