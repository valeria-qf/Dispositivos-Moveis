import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type CounterProps = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

export default function Counter({ count, increaseCount, decreaseCount }: CounterProps) {
  return (
    <View style={styles.container}>

      <Text style={styles.input}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseCount}>
        <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={increaseCount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
