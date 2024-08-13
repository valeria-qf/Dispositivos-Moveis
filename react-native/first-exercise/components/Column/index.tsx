import React from 'react';
import { View, StyleSheet } from 'react-native';

const Column: React.FC = () => {
  return (
    <View style={styles.column}>
      <View style={styles.blackBoxRow} />
      <View style={styles.blackBoxRow} />
      <View style={styles.blackBoxRow} />
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  blackBoxRow: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    margin: 2, 
  },
});

export default Column;
