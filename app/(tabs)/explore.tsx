import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';
import { SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context"

export default function TabTwoScreen() {
  return (
    <SafeAreaProvider style={styles.container}>

    <SafeAreaView>
        <Text style={styles.text}>Explore</Text>
    </SafeAreaView>
</SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black"
  },
  text:{
    color:"white",
    fontSize:40
  }

})