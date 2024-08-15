import { View,FlatList ,Text,StyleSheet} from "react-native"


const UserList = (props)=>{
console.log('prosss',props);
const data= props.item
console.warn(data)
return(
    <View>
        <FlatList  data={data} renderItem={({item})=><View>
            <Text style={styles.iitem}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    }>

        </FlatList>


    </View>
)

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    iitem: {
      fontSize: 24,
      padding: 20,
      color: "#ffff",
      backgroundColor: "#00CED1",
      margin: 10
    },
    email:{
        fontSize: 24,
        padding: 20,
        color: "#ffff",
        backgroundColor: "#228B22",
        margin: 10
    },
    text: {
      textAlign: "center",
      margin: 20,
      padding: 20,
      fontSize: 24,
      color:"red"
    }
  });
  

export default UserList