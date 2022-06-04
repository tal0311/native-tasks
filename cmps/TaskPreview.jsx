import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import { gStyles } from './../assets/globalStyles'

import React from 'react'

export const TaskPreview = ({ task, removeTask, taskDetails }) => {
  // console.log('preview:', task)
  const { id, txt, isDone, updatedAt, createdAt, importance } = task

  const handlePress = () => {
    console.log('press')
    taskDetails(id)
  }

  const longPress = () => {
    Alert.alert('Task actions', '', [
      {
        text: 'back',
        onPress: () => console.log('back'),
      },
      {
        text: 'Delete',
        onPress: () => removeTask(id),
      },
      {
        text: 'Details',
        onPress: () => taskDetails(id),
      },
    ])
  }

  if (!task) return <Text>Loading...</Text>
  return (
    <View style={isDone ? gStyles.isDone : ''}>
      <Pressable onLongPress={(id) => longPress(id)} onPress={handlePress}>
        <View style={gStyles[importance]}>
          <Text
            style={
              isDone
                ? [gStyles.taskPreview, gStyles.isDone]
                : gStyles.taskPreview
            }
          >
            {txt}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}
