import { Text, View, StyleSheet, ScrollView } from "react-native"
import ListMap from "./components/ListMap"
import Grid from "./components/Grid";
import UserList from "./components/UserList";
import Class_components from "./components/Class_components";
import UseEffect from "./components/UseEffect";


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

      <UseEffect></UseEffect>
      

      {/* <Grid /> */}
      </View>
    </ScrollView>
    
  )

}

export default App;


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