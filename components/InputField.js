import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ value, placeholder, onChangeText, isValid, errorMessage, keyboardType }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, !isValid && styles.invalidInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {!isValid && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'purple',
    padding: 5,
  },
  invalidInput: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default InputField;
