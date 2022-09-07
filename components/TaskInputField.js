import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Platform } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const TaskInputField = (props) => {
    
    const [task, setTask] = useState();

    const handleAddTask = (value) =>{
        props.addTask(value);
        setTask(null);
    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >

            <TextInput style={styles.inputField}
            value={task}
            onChangeText={text => setTask(text)}
            placeholder={"Digite aqui meu nobre!"}
            placeholderTextColor="green"
            >
            </TextInput>

            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color = "#030303" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
} 

const styles = StyleSheet.create({
    container: {
     borderColor: "lightpink",
     backgroundColor: "lightyellow",
     borderWidth: 5,
     marginHorizontal: 20,
     borderRadius: 12,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     paddingHorizontal: 10,
     position: "absolute",
     bottom: 20,
    },
    inputField:{
        color:"green",
        height: 50,
        flex: 1,
        fontWeight: 'bold'
    },
    button:{
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: "lightgreen",
        alignItens: "center",
        justifyContent: "center",
    }

  });

export default TaskInputField;