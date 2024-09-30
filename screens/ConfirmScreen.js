import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { LinearGradient } from 'expo-linear-gradient';



const ConfirmScreen = ({ name, email, phone, onGoBack, onContinue }) => {
  return (
    <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.container}>
      <Card>
        <Text style={styles.modalText}>Hello {name}</Text>
        <Text style={styles.modalText}>Here is the information you entered:</Text>
        <Text style={styles.modalText}>Email: {email}</Text>
        <Text style={styles.modalText}>Phone: {phone}</Text>
        <Text style={styles.modalText}>If it is not correct, please go back and edit them.</Text>

        <View style={styles.buttonContainer}>
          <CustomButton title="Go back" color="red" onPress={onGoBack} />
          <CustomButton title="Continue" color="blue" onPress={onContinue} />
        </View>
      </Card>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: 'purple',
    marginVertical: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ConfirmScreen;
