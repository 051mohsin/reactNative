import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"


const UseEffect = ()=>{
    const [count , setCount]= useState(0);
    const [data, setDate] = useState("Mohsin");

    useEffect(()=>{
        console.warn("count reload page:",count)

    },[count]);

    return(
        <View>
        <Text>
            Ues Effect hock
        </Text>
        <Text>counter:{count}</Text>
        <Text>Name:{data}</Text>
        <Button title="increment" onPress={()=>setCount(count + 1)}></Button>
        <Button title="decrement" onPress={()=>setCount(count - 1)}></Button>
        <Button title="Setdata" onPress={()=>setDate("useEffect")}></Button>

        
    </View>
    )


}

export default UseEffect