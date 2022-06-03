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
  Pressable,
  Alert,
} from 'react-native'
import { gStyles } from './../assets/globalStyles'

import React from 'react'

export const TaskPreview = ({ task, removeTask }) => {
  // console.log('preview:', task)
  const { id, txt, isDone, updatedAt, createdAt, importance } = task
  const handlePress = () => {
    console.log('press')
  }

  const longPress = () => {
    console.log('long press')
    Alert.alert('Task actions', '', [
      {
        text: 'back',
        onPress: () => console.log('back'),
      },
      {
        text: 'Delete',
        onPress: () => removeTask(id),
        style: 'cancel',
      },
      { text: 'Details', onPress: () => console.log('details') },
    ])
  }

  if (!task) return <Text>Loading...</Text>
  return (
    <View>
      <Pressable onLongPress={(id) => longPress(id)} onPress={handlePress}>
        <View>
          <Text
            // onLongPress={longPress}
            style={gStyles.taskPreview}
          >
            {txt}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})
