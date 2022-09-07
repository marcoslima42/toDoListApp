import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import TaskInputField  from './components/TaskInputField.js';
import TaskItem from './components/TaskItem.js';


export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
  if(task == null) return;
  
  setTasks([...tasks, task]);
  Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    console.log("deleteTask Started");
    
    console.log(`Index: deleteIndex: ${deleteIndex}`);

    setTasks(tasks.filter((value, index) => index != deleteIndex))
  }

  return (

    <View style={styles.container}>
      <Text style={styles.heading}>
        Lista de Tarefas
      </Text>

      <ScrollView style={styles.scrollView}>
      {
        tasks.map((task, index) => {
          return(
            <View  style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask ={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>

      <TaskInputField addTask={addTask}></TaskInputField>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow",
  },
  heading: {
    color: "purple",
    fontSize: 110,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
  },
  scrollView:{
    marginBottom: 70,
  },
  taskContainer:{
    marginTop: 20,
  }
});