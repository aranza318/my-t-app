import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableOpacity } from "react-native";
import {useState} from 'react'
import DeleteModal from "./components/DeleteModal";
import TaskInput from "./components/TaskInput";
import TasksList from "./components/TasksList";

export default function App() {
  const [taskInput, setTaskInput] = useState("")
  const [tasksList, setTasksList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected, setTaskSelected] = useState({})
  const [activities, setActivities]= useState([])
  const handlerAddItemToList = () => {
    if (taskInput.trim() === "" ) {
      Alert.alert('Error', 'No se pueden agregar tareas vacias')
    } else {
     setTasksList(prevState => [...prevState, {"id": Math.random(), "value":taskInput}])
     setTaskInput("")
    } 
    }
  const handleDeleteTask = () =>{
    setTasksList(tasksList.filter((task)=>task.id != taskSelected.id))
    setModalVisible(false)
  }
  
  const handleSelectedTask = (item)=>{
    setTaskSelected(item)
    console.log(item)
    setModalVisible(true)
    }
  
  function done (selectedActivity){
     
     if (activities.includes(selectedActivity)){
       setActivities(activities.filter(activity => activity !== selectedActivity))
       return;
     }
     setActivities(activities => activities.concat(selectedActivity))
  }

  const renderTaskItem = ({item}) =>(
    <View style={styles.task}>
      <TouchableOpacity style={styles.checkBox} onPress={()=>done(item)}>
       {activities.includes(item)&&<Text style={styles.checked}>✓</Text>} 
      </TouchableOpacity>
      <Text style={styles.littletxt}>{item.value}</Text>
      <Button title="x" color="red" onPress={()=>handleSelectedTask(item)}/>
    </View>
  )
  
 
  return (
    <>
      <View style={styles.container}>
         <TaskInput
         taskInputDown= {taskInput}
         handlerAddItemToListUp= {handlerAddItemToList}
         setTaskInputUp= {setTaskInput}
         />
         <TasksList 
         tasksListDown={tasksList}
         renderTaskItemUp={renderTaskItem}
         />
      </View>
      <DeleteModal 
      modalVisibleDown= {modalVisible}
      taskSelectedDown= {taskSelected}
      handleDeleteTaskUp={handleDeleteTask}
      setModalVisibleUp={setModalVisible}/>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#464646",
    paddingHorizontal: 20,
  },
  littletxt:{
    color:"#fff",
  },
  task: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    paddingBottom: 8,
    borderBottomColor:"#ccc",
    borderBottomWidth:1,
    marginVertical: 4,
  },
  checkBox:{
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'cyan',
    marginRight: 5,
  },
  checked:{
    alignSelf: 'center',
    color: 'white'
  }
});
