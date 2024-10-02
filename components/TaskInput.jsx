import { StyleSheet, TextInput, View, Button } from 'react-native'


const TextI = ({taskInputDown, handlerAddItemToListUp, setTaskInputUp}) => {
  return (
    <View style={styles.add}>
    <TextInput
     style={styles.textI}
     placeholder='Añade una tarea'
     onChangeText={(text)=>{setTaskInputUp(text)}}
     value={taskInputDown}
    />
    <Button title="+" color="#1D9225" onPress={handlerAddItemToListUp} />
  </View>
  )
}

export default TextI

const styles = StyleSheet.create({
  add : {
    flexDirection:'row',
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent:'space-between',
    borderBottomColor:"#FFF",
    borderBottomWidth: 2,
    },
  textI: {
    borderWidth: 1,
    borderColor:"#ccc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor:"#ccc",
    width:'90%',
  },
})