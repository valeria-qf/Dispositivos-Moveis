import React from 'react';
import { View, StyleSheet } from 'react-native';

const Grid: React.FC = () => {
  return (
    <View style={styles.grid}>
      {Array.from({ length: 15 }).map((_, index) => (
        <View key={index} style={styles.blackBoxGrid} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  blackBoxGrid: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    margin: 2, 
  },
});

export default Grid;
