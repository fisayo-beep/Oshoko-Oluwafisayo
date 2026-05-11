import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const addNumbers = () => {
    setResult((Number(num1) + Number(num2)).toString());
  };

  const subtractNumbers = () => {
    setResult((Number(num1) - Number(num2)).toString());
  };

  const multiplyNumbers = () => {
    setResult((Number(num1) * Number(num2)).toString());
  };

  const divideNumbers = () => {
    if (Number(num2) === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult((Number(num1) / Number(num2)).toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fisayo Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <TouchableOpacity style={styles.button} onPress={addNumbers}>
        <Text style={styles.buttonText}>Addition (+)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={subtractNumbers}>
        <Text style={styles.buttonText}>Subtraction (-)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={multiplyNumbers}>
        <Text style={styles.buttonText}>Multiplication (×)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={divideNumbers}>
        <Text style={styles.buttonText}>Division (÷)</Text>
      </TouchableOpacity>

      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e9d5ed',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#f31414',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f5a2dc',
  },

  button: {
    backgroundColor: '#f5a2dc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#f5e6ed',
    fontSize: 18,
    fontWeight: 'bold',
  },

  result: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});