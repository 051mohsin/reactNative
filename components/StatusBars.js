import { useState } from "react";
import { Button, StatusBar, StyleSheet, View } from "react-native"

const  StatusBars = ()=>{

    const [hide ,setShow]= useState(true)

    const[barStyles, setBarStyles]= useState("defualt")
    return(
        <View style={styles.container}>
            <StatusBar
            backgroundColor="white"
            hidden={hide}

            barStyle={barStyles}

            >
            </StatusBar>
            <Button title=" status bar toggle" onPress={()=>setShow(!hide)}></Button>
            <Button title="status bar Style Update" onPress={()=>setBarStyles("dark-content")}></Button>

        </View>
    )
}


export default StatusBars;


const styles = StyleSheet.create({
    container:{

        flex:1,
        justifyContent:'center',
        

    }
})