import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
const Data = [
  {
    id: 1,
    name: "mohain1"
  },
  {
    id: 2,
    name: "mohain2"
  },
  {
    id: 3,
    name: "mohain3"
  },
  {
    id: 4,
    name: "mohain4"
  },
  {
    id: 1236553,
    name: "mohain5"
  },
  {
    id: 12355,
    name: "mohain6"
  },
  {
    id: 12756,
    name: "mohain7"
  },
  {
    id: 125655,
    name: "mohain8"
  },
  {
    id: 12345,
    name: "mohain9"
  },
  {
    id: 12434,
    name: "mohain10"
  },
  {
    id: 15343,
    name: "mohain11"
  },
  {
    id: 1133,
    name: "mohain12"
  },
  {
    id: 1333,
    name: "mohain13"
  },
  {
    id: 14,
    name: "mohain14"
  },

]
export default function ListMap() {
  const appName = "list rander with map function"
  return (
    <View >
      <Text style={styles.text}>{appName}</Text>
      <ScrollView style={{height:790}}>
        {Data.map((iitem) => <Text key={iitem.id} style={styles.iitem}>{iitem.name}</Text>)}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
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
    backgroundColor: "blue",
    borderWidth: 1,
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
