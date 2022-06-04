import { useState, useEffect } from 'react'
import { Text, View, Pressable, TextInput } from 'react-native'

import { gStyles } from './../assets/globalStyles'

export const TaskDetails = ({ task }) => {
  const [edit, setEdit] = useState(txt)
  const [isEditable, setIsEditable] = useState(false)
  const { id, txt, isDone, updatedAt, createdAt, importance } = task

  useEffect(() => {
    if (task) setEdit(txt)
  }, [])
  const handleChange = (value) => {
    setIsEditable(!isEditable)
    setEdit(value)
  }

  const onBack = () => {
    setIsEditable(!isEditable)
    console.log('back')
  }

  return (
    <View style={gStyles.taskDetails}>
      <TextInput value={edit} onChangeText={handleChange} />
      <Pressable onPress={onBack}>
        <Text style={gStyles.backBtn}>back</Text>
      </Pressable>
    </View>
  )
}
