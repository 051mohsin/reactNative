import { Text, View, StyleSheet, ScrollView } from "react-native"
import ListMap from "./components/ListMap"
import Grid from "./components/Grid";
import UserList from "./components/UserList";
import Class_components from "./components/Class_components";
import UseEffect from "./components/UseEffect";
import Unmount from "./components/Unmount";

import TouchableHighlightss from "./components/TouchableHighlightss";
import Radionbuttonss from "./components/Radiobuttonss";
import Dynamic_Radio from "./components/Dynamic_Radio";
import Indicator from "./components/Indicator";

const App = () => {
  const user_List =[
    {
        id:1,
        email:"mohsinriaz@gmail.com",
        name:"mohsin"
    },
    {
        id:2,
        email:"ali@gmail.com",
        name:"ali"
    },
    {
        id:3,
        email:"khan@gmail.com",
        name:"khan"
    },
    {
        id:4,
        email:"tahir@gmail.com",
        name:"tahir"
    },
    {
        id:5,
        email:"shahbaz@gmail.com",
        name:"shahbaz"
    },
    

]

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.text}>App components</Text>
      {/* <ListMap ></ListMap> */}
      {/* <UserList item={user_List}></UserList> */}
      {/* <Class_components></Class_components> */}

      {/* <UseEffect></UseEffect> */}
      

      {/* <Grid /> */}

      {/* <Unmount>
      </Unmount> */}

      {/* <TouchableHighlightss></TouchableHighlightss>
       */}

       {/* <Radionbuttonss></Radionbuttonss>*/}

       {/* <Dynamic_Radio></Dynamic_Radio> */}
        

      <Indicator></Indicator>

    


      </View>
    </ScrollView>
    
  )

}
// const App =()=>{
//   return(
//     <View style={styless.main}>

//       <View style={styless.inner1}>
//         <View style={styless.inners1}></View>
//         <View style={styless.inners2}></View>
//         <View style={styless.inners3}></View>
//         <View style={styless.inners4}></View>
        
//       </View>

//       <View style={styless.inner2}></View>

//       <View style={styless.inner3}></View>

//       <View style={styless.inner4}></View>

      

//     </View>
    
//   )

// }


export default App;


// const styless = StyleSheet.create({

//   main:{
//     flex:1,

//   },
//   inner1:{
//     flex:1,
//     backgroundColor:"green",
//     flexDirection:"row",
    

//   },
//   inner2:{
//     flex:1,
//     backgroundColor:"blue"

//   },
//   inner3:{
//     flex:1,
//     backgroundColor:"red"

//   },
//   inner4:{
//     flex:1,
//     backgroundColor:"yellow"

//   },
//   inners1:{
//     flex:1,
//     backgroundColor:"lightblue",
//     margin:10

//   },
//   inners2:{
//     flex:1,
//     backgroundColor:"purple",
//     margin:10,
    

//   },
//   inners3:{
//     flex:1,
//     backgroundColor:"black",
//     margin:10

//   },
//   inners4:{
//     flex:1,
//     backgroundColor:"white",
//     margin:10

//   }

// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  text: {
    textAlign: "center",
    margin:15,
    padding:15,
    fontSize: 24,
    color: "red"
  }
})