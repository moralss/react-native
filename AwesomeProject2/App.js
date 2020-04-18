/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  CheckBox,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([{ name: 'wash car', value: false },
  { name: 'clean car', value: false }]);
  const [todoName, setTodo] = useState('');
  const [checked, setChecked] = useState(true);
  const addTodo = () => {
    setTodos([...todos, { name: todoName }]);
    setTodo('');
  };

  const removeTodo = choiceName => {
    setTodos(todos.filter(todo => todo.name !== choiceName));
    setTodo('');
  };

  return (
    <>
      <View>
        <Text style={{ padding: 10 }}>Todo App</Text>
        {todos.map(todo => {
          return (
            <View style={styles.todoItem}>
              <Text>{todo.name}</Text>
              <CheckBox
                title='Click Here'
                value={todo.value}
                onValueChange={setTodos}
              />
              <Button onPress={() => removeTodo(todo.name)} title="delete" />
            </View>
          );
        })}
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type Your Todo"
            onChangeText={text => setTodo(text)}
            defaultValue={todoName}
          />
          <Button
            style={{ paddingLeft: '4rem' }}
            onPress={() => addTodo()}
            title="Add Todo"
          />
        </View>
        {/* <AddTodo /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    // justifyContent: ' center',
    // width: '580px',
    // width: '100%',
  },
});

export default App;
