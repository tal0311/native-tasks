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
import { TaskList } from '../cmps/TaskList'

export const Tasks = ({ tasks, taskDetails, removeTask }) => {
  return (
    <View>
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        taskDetails={taskDetails}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
