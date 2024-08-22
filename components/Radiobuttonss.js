import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Radionbuttonss= ()=>{

    const [checked , setChecked] = useState(1);
    
    return(
        <View style={styless.main}>
                    <Text style={styless.text}>Radion buttons</Text>
                    <TouchableOpacity onPress={()=>setChecked(1)}>
                        <View style={styless.warpper}>
                            <View style={styless.radio}>
                                {
                                    checked === 1 ?<View style={styless.bgback}></View>:null
                                }
                            </View>
                            <Text style={styless.radioText} >
                                Radio 1
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setChecked(2)}>
                        <View style={styless.warpper}>
                            <View style={styless.radio}>
                            {
                                    checked === 2 ?<View style={styless.bgback}></View>:null
                                    
                                }
                            </View>
                            <Text style={styless.radioText} >
                                Radio 2
                            </Text>
                        </View>
                    </TouchableOpacity>

        </View>
    )
}

export default Radionbuttonss;


const styless= StyleSheet.create({
    main: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"

        
        
      },
      text: {
        textAlign: "center",
        margin:15,
        padding:15,
        fontSize: 24,
        color: "green"
      },

      radioText:{
        fontSize:24

      },
      radio:{
        height:40,
        width:40,
        borderColor:"black",
        borderWidth:2,
        borderRadius:20,
        margin:20
      },

      warpper:{
        flexDirection:'row',
        alignItems:"center"
      },

      bgback:{
        backgroundColor:"black",
        width:30,
        height:30,
        borderRadius:20,
        margin:3

      }
})