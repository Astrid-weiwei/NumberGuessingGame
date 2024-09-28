import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

const ConfirmScreen = ({ visible, name, email, phone, onGoBack, onContinue }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Card>
          <Text style={styles.text}>Hello {name}</Text>
          <Text style={styles.text}>Here is the information you entered:</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.text}>If it is not correct, please go back and edit them.</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onGoBack} style={[styles.button, styles.goBackButton]}>
              <Text style={styles.buttonText}>Go back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onContinue} style={[styles.button, styles.continueButton]}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent gradient background
  },
  text: {
    color: 'purple',
    marginVertical: 5,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackButton: {
    backgroundColor: 'red',
  },
  continueButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmScreen;
