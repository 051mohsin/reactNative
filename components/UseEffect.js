import { useEffect, useState } from "react"
import { Button, Text, View ,StyleSheet} from "react-native"
import UseEffect1 from "./UseEffect1";
import ShowandHide from "./ShowandHide";


const Separator = () => <View style={stylee.separator} />;
const UseEffect = ()=>{
    const [count , setCount]= useState(0);
    const [data, setDate] = useState("Mohsin");

    const [show, setShow]=useState(false)

    useEffect(()=>{
        console.warn("count reload page:",count)

    },[]);

    return(
        <View style={stylee.container}>
        <Text>
            Ues Effect hock
        </Text>
        <Text>counter:{count}</Text>
        <Text>Name:{data}</Text>
        <Button title="increment" onPress={()=>setCount(count + 1)}></Button>
        <Button title="decrement" onPress={()=>setCount(count - 1)}></Button>
        <Button title="Setdata" onPress={()=>setDate("useEffect")}></Button>
        <UseEffect1 info={{count,data}}></UseEffect1>


        {/* <Button title="Show Components"  style={stylee.button} onPress={()=>setShow(true)}></Button> */}
        <Separator />

        <Button title="toggle Components"   color="#f194ff" onPress={()=>setShow(!show)}></Button>
        {
            show== true ?  <ShowandHide></ShowandHide> : null
        }
       



        
    </View>
    )


}

export default UseEffect


const stylee= StyleSheet.create({

    container:{
        padding:10
    },
    button:{
        margin:10

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})