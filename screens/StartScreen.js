import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
      onRegister(name, email, phone); // Pass data to ConfirmScreen
    } else {
      alert('Please ensure all fields are correctly filled out.');
    }
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
          <CustomButton title="Register" color="blue" onPress={registerHandler} disabled={!isChecked} />
        </View>
      </Card>
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
});

export default StartScreen;
