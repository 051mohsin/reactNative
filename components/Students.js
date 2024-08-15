
import react ,{Component}from "react";
import { Button, Text, TextInput, View } from "react-native";

class Students extends Component{

   

    render(){

        // console.warn(this.props)

        return(

            <Text  style={{fontSize:24, color:"red"}}>Students:{this.props.name}</Text>
        )
    }

}

export default Students
