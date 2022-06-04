import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Tasks } from './screens/Tasks.jsx'
import { gStyles } from './assets/globalStyles'
import data from './data/tasks'
import { TaskDetails } from './cmps/TaskDetails.jsx'
export default function App() {
  const [tasks, setTasks] = useState(null)
  const [details, setDetails] = useState(null)

  const removeTask = (taskId) => {
    console.log('removing task:', taskId)

    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  useEffect(() => {
    if (!tasks) loadTasks()
    console.log('loading tasks')
  }, [tasks])

  const loadTasks = () => {
    setTasks(data)
  }
  const taskDetails = (taskId) => {
    const currTask = tasks.find((task) => task.id === taskId)
    console.log('removing task:', taskId)
    setDetails(currTask)
  }
  return (
    <View styles={styles.container}>
      <View>
        <Tasks
          tasks={tasks}
          taskDetails={taskDetails}
          removeTask={removeTask}
        />
      </View>
      {details && (
        <View>
          <TaskDetails task={details}></TaskDetails>
        </View>
      )}
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
