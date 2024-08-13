import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from '../Row';
import Column from '../Column';
import Grid from '../Grid';


interface SquareProps {
  type: 'row' | 'column' | 'grid';
}

const Square: React.FC<SquareProps> = ({ type }) => {
  return (
    <View style={styles.container}>
      {type === 'row' && <Row />}
      {type === 'column' && <Column />}
      {type === 'grid' && <Grid />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b2b9ff',
    margin: 20,
    borderRadius: 8,
    padding: 10,
  },
});

export default Square;
