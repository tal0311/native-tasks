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
import { TaskDetails } from '../cmps/TaskDetails'
import { gStyles } from '../assets/globalStyles'
import data from '../data/tasks'

export const Tasks = () => {
  const [tasks, setTasks] = useState(null)
  const [details, setDetails] = useState(null)

  const removeTask = (taskId) => {
    console.log('removing task:', taskId)

    setTasks(tasks.filter((task) => task.id !== taskId))
  }
  const taskDetails = (taskId) => {
    console.log('removing task:', taskId)
  }

  useEffect(() => {
    if (!tasks) loadTasks()
    console.log('loading tasks')
  }, [tasks])

  const loadTasks = () => {
    setTasks(data)
  }

  return (
    <View>
      <View>
        <TaskList tasks={tasks} removeTask={removeTask} />
      </View>

      {details && (
        <View>
          <TaskDetails task={details} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})
