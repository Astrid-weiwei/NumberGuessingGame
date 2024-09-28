import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import Card from '../components/Card';
import CheckBoxComponent from '../components/CheckBoxComponent';

const StartScreen = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state

  const validateName = (input) => /^[A-Za-z\s]{2,}$/.test(input);
  const validateEmail = (input) => /\S+@\S+\.\S+/.test(input);
  const validatePhone = (input) => /^[2-9]{1}\d{8}[2-9]{1}$/.test(input);

  const resetHandler = () => {
    setName('');
    setEmail('');
    setPhone('');
    setIsChecked(false);
    setIsNameValid(true);
    setIsEmailValid(true);
    setIsPhoneValid(true);
  };

  const registerHandler = () => {
    if (validateName(name) && validateEmail(email) && validatePhone(phone)) {
      setIsModalVisible(true); // Show the modal
    } else {
      alert('Please ensure all fields are correctly filled out.');
    }
  };

  const continueHandler = () => {
    setIsModalVisible(false);
    onRegister(phone); // Pass phone number to the next step in App.js
  };

  const goBackHandler = () => {
    setIsModalVisible(false); // Hide the modal
  };


  // Inside GameScreen.js
  const handleGuess = () => {
    if (userGuess === chosenNumber) {
      setIsGameOver(true);
      setGameOverReason('You guessed correctly!');
    } else {
      // Decrement attempts or check timer
      if (attemptsLeft <= 1) {
        onGameOver('You are out of attempts');
      } else {
        setAttemptsLeft(attemptsLeft - 1);
      }
    }
  };

  const handleTimerEnd = () => {
    onGameOver('You are out of time');
  };


  return (
    <View style={styles.container}>
      <Card>
        <InputField
          placeholder="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
            setIsNameValid(validateName(text));
          }}
          isValid={isNameValid}
          errorMessage="Please enter a valid name"
        />

        <InputField
          placeholder="Email address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setIsEmailValid(validateEmail(text));
          }}
          isValid={isEmailValid}
          errorMessage="Please enter a valid email"
          keyboardType="email-address"
        />

        <InputField
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
            setIsPhoneValid(validatePhone(text));
          }}
          isValid={isPhoneValid}
          errorMessage="Please enter a valid phone number"
          keyboardType="numeric"
        />

        <CheckBoxComponent
          label="I am not a robot"
          value={isChecked}
          onValueChange={setIsChecked}
        />

        <View style={styles.buttonContainer}>
          <CustomButton title="Reset" color="red" onPress={resetHandler} />
          <CustomButton
            title="Register"
            color="blue"
            onPress={registerHandler}
            disabled={!isChecked}
          />
        </View>
      </Card>

      {/* Modal for Confirmation Screen */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <Card>
            <Text style={styles.modalText}>Hello {name}</Text>
            <Text style={styles.modalText}>Here is the information you entered:</Text>
            <Text style={styles.modalText}>{email}</Text>
            <Text style={styles.modalText}>{phone}</Text>
            <Text style={styles.modalText}>If it is not correct, please go back and edit them.</Text>

            <View style={styles.buttonContainer}>
              <CustomButton title="Go back" color="red" onPress={goBackHandler} />
              <CustomButton title="Continue" color="blue" onPress={continueHandler} />
            </View>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background with rgba color
  },
  modalText: {
    fontSize: 16,
    color: 'purple',
    marginVertical: 5,
  },
});

export default StartScreen;
