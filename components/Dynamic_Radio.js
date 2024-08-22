import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Dynamic_Radio = ()=>{
    const skill =[
        {
            id:1,
            name:"Javascript"
        },
        {
            id:2,
            name:"Vue"
        },
        {
            id:3,
            name:"React native"
        },
        {
            id:4,
            name:"React Js"
        },
        {
            id:5,
            name:"Anguler"
        },
    ]




    const [checked,setChecked]=useState(1)

    return(
        <View>
            <Text style={styless.heading}>Dynamic Radio Button</Text>
            {
                skill.map((item,index)=><TouchableOpacity
                key="index"
                onPress={()=>setChecked(item.id)}
                >
                <View style={styless.warpper}>
                                <View style={styless.radio}>
                                    {
                                        checked == item.id ?<View style={styless.bgback}></View>:null
                                    }
                                </View>
                                <Text style={styless.radioText} >
                                    {item.name}
                                </Text>
                            </View>
                </TouchableOpacity>)
            }
        </View>
    )


}


const styless = StyleSheet.create({
    heading:{
        textAlign:"center",
        fontWeight:'500',
        fontSize:24,
        color:"purple"
    },


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
        color: "purple"
      },

      radioText:{
        fontSize:24,
        color:"purple"

      },
      radio:{
        height:20,
        width:20,
        borderColor:"purple",
        borderWidth:2,
        borderRadius:20,
        margin:20
      },

      warpper:{
        flexDirection:'row',
        alignItems:"center"
      },

      bgback:{
        backgroundColor:"purple",
        width:10,
        height:10,
        borderRadius:20,
        margin:3

      }

})








export  default Dynamic_Radio;