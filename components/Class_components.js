import react ,{Component}from "react";
import { Button, Text, TextInput, View } from "react-native";
import Students from "./Students";


class Class_components extends Component{

   constructor(){
    super()
    this.state = {
        name:"Class Components"
    }
    
   }
   updatNme(val)
    {
        this.setState({name:val})
    }

render(){
    return(
        <View>

            <Text style={{fontSize:24, color:"red"}}>{this.state.name}</Text>
            <TextInput  style={{border:1, borderColor:"black"}} 
            
            placeholder="Please enter your name"  
            onChangeText={(text)=>this.updatNme(text)}
            ></TextInput>
            <Button title="press" ></Button>
            <Students name={this.state.name}></Students>
        </View>
    )
}

}

export default Class_components