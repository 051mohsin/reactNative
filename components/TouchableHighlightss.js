import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const TouchableHighlightss = () => {


const clickable= ()=>{
  console.warn("TouchableHighlight")
}

  return (
    <View style={stylee.main}>
      <Text> TouchableHighlight Components</Text>
      <TouchableHighlight  onPress={clickable}>
        <Text style={stylee.button}>Button</Text>

      </TouchableHighlight>

    </View>
  )

}

export default TouchableHighlightss


const stylee= StyleSheet.create({
  main:{
    flex:1
  },
  button:{
    backgroundColor:"#bbb",
    color:"white",
    fontSize:19,
    padding:15,
    margin:10,
    borderRadius:10,
    textAlign:"center",
    shadowColor:"red",
    elevation:10,
    shadowOpacity:-5


    


  }

})