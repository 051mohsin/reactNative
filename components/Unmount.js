import { useEffect, useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"


const Unmount = ()=>{

    const [show , setShow]= useState(true)
    return(
        <View >
            <Text style={styless.text}>
                Unmount hock by usig useEffect
            </Text>
            <Button title="show and Hide" onPress={()=>setShow(!show)} ></Button>
            {
                show  ? <Students></Students> :null
            }
        </View>
    )
}




const Students = ()=>{
     const timer = setInterval(()=>{
        console.warn("timer called")
    },2000)

    useEffect(()=>{

        return(()=>{clearInterval(timer)})
    })
    return(
        <View >
            <Text style={styless.text}>
               Component show and Hide
            </Text>

        </View>
    )
}

export default Unmount;


const styless = StyleSheet.create({
    text: {
        textAlign: "center",
        margin:5,
       
        fontWeight:"500",
        fontSize: 24,
        color: "green"
      }
})