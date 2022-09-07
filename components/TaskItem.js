import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const TaskItem = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>
                  {props.index} 
                </Text>
            </View>

            <View style={styles.taskContainer}>
              <Text style={styles.task}>
                {props.task}
              </Text>
              <TouchableOpacity onPress={() => props.deleteTask()}>
                <MaterialIcons style={styles.delete} name="delete" size={32} color="#fff"/>
              </TouchableOpacity>
            </View>
        </View>
    );
} 


const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      marginHorizontal: 20,
    },
    indexContainer:{
      backgroundColor: "lightpink",
      borderRadius: 12,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
    },
    index:{
      color: "green",
      fontSize: 20,
      fontWeight: 'bold'
    },
    taskContainer:{
      backgroundColor: "silver",
      borderRadius: 20,
  
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center",
  
      paddingHorizontal: 10,
      paddingVertical: 5,
      minHeight: 50,
    },
    task:{
        color:"#FFFFFF",
        width: "90%",
        fontSize: 16,
    },
    delete:{
        marginLeft: 2,
        
    }

  });
export default TaskItem;