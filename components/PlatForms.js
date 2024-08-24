import { Platform, StyleSheet, Text, View } from "react-native"

const PlatForms = ()=>{
    return(
        <View>
            <Text>platForm Component:{Platform.OS}</Text>
            {
                Platform.OS === 'android' ? <View style={{backgroundColor:"red", height:100, width:100}}></View>
                :
                <View style={{backgroundColor:"green", height:100, width:100}}></View>


            }

            <Text style={styles.text}> plat form components</Text>
            <Text style={{fontSize:26}}>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
        </View>
    )
}

export default PlatForms;

const styles = StyleSheet.create({
    text:{
        color:Platform.OS === "android" ?"blue":"purple",
        fontSize:24,
        fontWeight:'800'
    }
})