import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5260c5',
  },

  input: {
    fontSize: 32,
    width: 100,
    padding: 10,
    textAlign: 'center',
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#2f1c58',
    color: '#fff',
    padding: 10,
    width: 50,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default styles;
