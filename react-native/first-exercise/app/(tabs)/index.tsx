import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Square from '@/components/Square';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      <View style={styles.headerContainer}>
        <Header />
      </View>

      <View style={styles.content}>
        <Square type='row' />
        <Square type='column' />
        <Square type='grid' />
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73779e',
  },
  headerContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    backgroundColor: '#8A8FC3',
    margin: 20,
    borderRadius: 10,
    flexDirection: 'column', 
    justifyContent: 'space-between', 
  },
});
