import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Tasks } from './screens/Tasks.jsx'
// import { gStyles } from './assets/globalStyles'
import data from './data/tasks'
import { TaskDetails } from './cmps/TaskDetails.jsx'
export default function App() {
  const [tasks, setTasks] = useState(null)
  const [details, setDetails] = useState(null)

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
    console.log('removing task:', taskId)
  }

  const onUpdateTask = (taskId, type, value) => {
    const taskToEdit = tasks.find((task) => task.id === taskId)
    const idx = tasks.findIndex((task) => task.id == taskId)
    switch (type) {
      case 'EDIT_TXT':
        taskToEdit.txt = value
        break
      case 'EDIT_PRIORITY':
        taskToEdit.importance = value
        break
      case 'EDIT_DONE':
        taskToEdit.isDone = value
      // default:
      //   break;
    }
    console.log(taskToEdit)
    tasks.splice(idx, 1, taskToEdit)
    setTasks(tasks)
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
    setDetails(currTask)
  }
  return (
    <View styles={styles.container}>
      <View>
        <Tasks
          tasks={tasks}
          setDetails={setDetails}
          removeTask={removeTask}
          taskDetails={taskDetails}
        />
      </View>
      {details && (
        <View>
          <TaskDetails
            task={details}
            setDetails={setDetails}
            onUpdateTask={onUpdateTask}
          ></TaskDetails>
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
