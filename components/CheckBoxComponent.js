import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComponent = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <CheckBox value={value} onValueChange={onValueChange} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: 'purple',
  },
});

export default CheckBoxComponent;
