import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Counter from '../components/Counter';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Contador de pessoas</Text>
      <Counter
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5260c5',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    color: '#fff',
  },
});
