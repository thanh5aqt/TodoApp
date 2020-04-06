import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './src/components/Task';

const App = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const AddTodo = () => {
    if (value.length > 0) {
      setTodos(
        [...todos, { text: value, key: Date.now(), checked:false}]
      )
      setValue('')
    }
  }

  const handleUpdateTodo = () => {

  }

  const DeleteTodo = (id) => {
    setTodos( todos.filter((todo) => {
      if (todo.key !== id)
        return true;
    })
  )}

  const CheckedTodo = (id) => {
    setTodos( todos.map((todo) => {
      if (todo.key === id) todo.checked = !todo.checked;
      return todo;
    })
  )}

  return (
    <ImageBackground
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_the_Communist_Party_of_Vietnam.svg/1024px-Flag_of_the_Communist_Party_of_Vietnam.svg.png' }}
      style={styles.container}
    >
      <Text
        style={{ marginTop: '10%', fontSize: 27, color: 'white' }}
      >Vô vi thực đầu buồi
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          onChangeText={(value) => setValue(value)}
          placeholder={'Gõ vào đây nhé '}
          placeholderTextColor="white"
          value={value}
        />
        <TouchableOpacity onPress={() => AddTodo()}>
          <Icon
            name="plus"
            size={30}
            color="#900"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%'}}>
     {todos.map((task) => (
        <Task
          text={task.text}
          key={task.key}
          checked={task.checked}
          setChecked={() => CheckedTodo(task.key)}
          delete={() => DeleteTodo(task.key)}
        />
       ))
   }
   </ScrollView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5
  }
});

export default App
