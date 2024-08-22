import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native"

const Indicator = ()=>{

    const [ showLoader , setshowLoader]= useState(false)

   const displayLoader =()=>{
    setshowLoader(true)
    setTimeout(()=>{
        setshowLoader(false)
    },3000)
   }
    return(
        <View style={styles.main}>
            <Text>Indicator/ Loador</Text>
            {
                showLoader? <ActivityIndicator size={50} color="purple" animating={showLoader}/>:null
            }

            <Button title="Show Loader" onPress={displayLoader}></Button>
        </View>
    )
}

export default Indicator;



const styles =  StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        margin:20
    }
})