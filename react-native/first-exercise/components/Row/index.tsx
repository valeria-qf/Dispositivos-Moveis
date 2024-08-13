import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row: React.FC = () => {
  return (
    <View style={styles.row}>
      <View style={styles.blackBox} />
      <View style={styles.blackBox} />
      <View style={styles.blackBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  blackBox: {
    width: 50,
    height: 150,
    backgroundColor: 'black',
    margin: 2, 
  },
});

export default Row;
