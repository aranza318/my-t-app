import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'


const DeleteModal = ({modalVisibleDown, taskSelectedDown, handleDeleteTaskUp, setModalVisibleUp}) => {
  return (
    <Modal animationType="fade" visible={modalVisibleDown}>
       <View style={styles.modalContainer}>
         <Pressable style={styles.closeButton} onPress={()=>setModalVisibleUp(false)}>
           <Text style={styles.closeT}>x</Text>
         </Pressable>
         <View style={styles.textC}>
         <Text style={styles.modalT}>Confirmar eliminación</Text>
         <Text style={styles.modalText}>{taskSelectedDown.value}</Text>
         <Text style={styles.modalDTW}>Esta acción no se puede deshacer</Text>
         </View>
         <View style={styles.buttonsC}>
           <Pressable style={styles.cancelBtn} onPress={()=>setModalVisibleUp(false)}>
             <Text style={styles.cancelT}>Cancelar</Text>
           </Pressable>
           <Pressable style={styles.deleteBtn} onPress={handleDeleteTaskUp}>
             <Text style={styles.deleteT}>Si, eliminar</Text>
           </Pressable>
         </View>
       </View>
      </Modal>
  )
}

export default DeleteModal

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#464646",
        flex: 1,
      },
      closeButton: {
        alignSelf: 'flex-end',
        padding: 30,
      },
      closeT: {
        color: "#fff",
        fontSize: 30,
      },
      textC: {
        justifyContent:"center",
        alignItems: "center",
        gap: 10,
      },
      modalT: {
        color: "#fff",
        fontSize:20,
        fontWeight: "bold",
      },
      modalText: {
        color: "#fff",
        fontSize: 14,
      },
      modalDTW: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
      },
      buttonsC: {
        padding:30,
        flexDirection:'row',
        gap: 10,
      },
      deleteBtn: {
        backgroundColor: "#c71919",
        width: "48%",
        padding: 10,
        borderRadius: 15,
      },
      deleteT: {
        textAlign: "center",
        fontSize: 14,
        color:"#fff",
        fontWeight: 'bold'
      },
      cancelBtn: {
        backgroundColor:"#C5C5C5",
        width: "48%",
        padding: 10,
        borderRadius: 15,
      },
      cancelT: {
        textAlign: "center",
        fontSize: 14,
        color: "#474646"
      }
})