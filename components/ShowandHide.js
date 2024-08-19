import { Text, View,StyleSheet } from "react-native"

const ShowandHide= ()=>{
    return(
        <View>
            <Text style={styles.text}>Show and Hide components</Text>

        </View>
    )
}

export default ShowandHide;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },

   
    text: {
      textAlign: "center",
      margin:15,
      padding:15,
      fontWeight:"500",
      fontSize: 24,
      color: "green"
    }
  })