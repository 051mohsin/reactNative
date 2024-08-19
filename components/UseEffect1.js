import { useEffect } from "react"
import { Text, View } from "react-native"

const UseEffect1 =(props)=>{

     useEffect(()=>{
        console.warn("run this code when data pros is update")
     },[props.info.data])
    // console.warn(props)



    return(
        <View>
            <Text style={{fontSize:30, color:"red"}}>
                UseEffect1

            </Text>
            <Text style={{fontSize:30, color:"red"}}>
                {props.info.count}

            </Text>
            <Text style={{fontSize:30, color:"red"}}>
                {props.info.data}

            </Text>

        </View>
    )
}

export default UseEffect1;