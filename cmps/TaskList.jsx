import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  Button,
} from 'react-native'
import { TaskPreview } from './TaskPreview'
import { gStyles } from './../assets/globalStyles'

export const TaskList = ({ tasks, removeTask }) => {
  // console.log('tasks', tasks)
  return (
    <View style={gStyles.taskList}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskPreview task={item} removeTask={removeTask} />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})
