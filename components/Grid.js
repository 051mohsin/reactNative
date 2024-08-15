import { StyleSheet, Text, View } from "react-native"


const Grid = () => {

    return (
        <View>
            <Text style={styles.text}>Grid components</Text>

            <View style={{flex:1,flexDirection:"row" ,flexWrap:"wrap",  justifyContent:"center",
            }}>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>
                <Text style={styles.item}>Mohsin</Text>


            </View>

        </View>
    )
}

export default Grid;


const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        
        fontSize: 24,
        color: "red"
    },
    item:{
        flex:0,
     
        fontSize:25,
        backgroundColor:"#00CED1",
        color:"white",
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlignVertical:"center",
        textAlign:"center"
    }
})