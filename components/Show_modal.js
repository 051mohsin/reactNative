import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View, ViewBase } from "react-native"

const Show_modal = () => {
    const [showModel, setshowModel]= useState(false)
    return (
        <View style={styles.centeredView}>
            <Text>Modal Components</Text>
            <Modal
            visible={showModel}
            >
                <View style={styles.centeredView} >
                    <View  style={styles.modalView}>
                    <Text  style={styles.modalText}>Modal Components</Text>
                        <Pressable onPress={()=>setshowModel(!showModel)}
                            style={[styles.button, styles.buttonClose]}
                            >
                            <Text style={styles.textStyle}>Hide modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Pressable onPress={()=>setshowModel(true)}
                 style={[styles.button, styles.buttonOpen]}
                >
                <Text  style={styles.textStyle}>Show modal</Text>
            </Pressable>

        </View>
    )
}

export default Show_modal;

const styles= StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'purple',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})