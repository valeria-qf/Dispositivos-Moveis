import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Logs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Credits</Text>
      </TouchableOpacity>
    </View>
  );
}
