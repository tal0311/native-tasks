import { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { TaskPreview } from './TaskPreview'
import { gStyles } from './../assets/globalStyles'

export const TaskList = ({ tasks, removeTask, taskDetails }) => {
  // console.log('tasks', tasks)
  return (
    <View style={gStyles.taskList}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskPreview
            task={item}
            removeTask={removeTask}
            taskDetails={taskDetails}
          />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})
