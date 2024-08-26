import { Button, StyleSheet, View } from "react-native"

const Custom_Modal = ()=>{

    return(
        <View style={styles.container}>
            <Button title="Open Diabox"></Button>
        </View>
    )

}

export default Custom_Modal

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:''

        
       
    }
})