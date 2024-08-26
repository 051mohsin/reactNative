import { Text, View, StyleSheet, ScrollView, Button } from "react-native"
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
import Show_modal from "./components/Show_modal";
import StatusBars from "./components/StatusBars";
import PlatForms from "./components/PlatForms";
import Custom_Modal from "./components/Custom_Modal";
import { useState } from "react";

const App = () => {

  const [showDialbox , setshowDailbox]= useState(false)
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
    // <ScrollView>
      <View style={styles.container} >
        {
          showDialbox ? <View style={styles.modal}>
          <View style={styles.body}>

            <Text style={styles.text}>
              DialBox Custom Modal
            </Text>
            <Button title="Hide Dialbox" onPress={()=>setshowDailbox(false)}></Button>

          </View>

        </View>: null
        }
      
      <Button title="show Dialbox" onPress={()=>setshowDailbox(true)}></Button> 




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
        

      {/* <Indicator></Indicator> */}

      {/* <Show_modal></Show_modal> */}

      {/* <StatusBars></StatusBars> */}

      {/* <PlatForms></PlatForms> */}

      {/* <Custom_Modal></Custom_Modal> */}

 


      </View>
    /* </ScrollView> */
    
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
    justifyContent:"flex-end"
    
    
  },
  modal:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
  body:{
    backgroundColor:"purple",
    height:300,
    width:300,
    padding:30,
    justifyContent:'flex-end'

  },
  text: {

    color: "white"
  }
})