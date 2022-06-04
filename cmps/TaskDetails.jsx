import { useState, useEffect } from 'react'
import { Text, View, Pressable, TextInput } from 'react-native'

import { gStyles } from './../assets/globalStyles'

export const TaskDetails = ({ task, setDetails, onUpdateTask }) => {
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
    onUpdateTask(id, 'EDIT_TXT', edit)
    setDetails(null)
  }

  const priority = (value) => {
    onUpdateTask(id, 'EDIT_PRIORITY', value)
  }
  const onDone = () => {
    onUpdateTask(id, 'EDIT_DONE', !isDone)
  }

  return (
    <View style={gStyles.taskDetails}>
      <TextInput value={edit} onChangeText={handleChange} />
      <Pressable>
        <Text onPress={() => onDone()} style={gStyles.doneBtn}>
          ✔️
        </Text>
      </Pressable>

      <View style={gStyles.actionsContainer}>
        <View style={gStyles.priorityContainer}>
          <Text
            style={[gStyles.priority, gStyles.high]}
            onPress={() => priority('high')}
          ></Text>
          <Text
            style={[gStyles.priority, gStyles.medium]}
            onPress={() => priority('medium')}
          ></Text>
          <Text
            style={[gStyles.priority, gStyles.low]}
            onPress={() => priority('low')}
          ></Text>
        </View>
        <View>
          <Pressable onPress={onBack}>
            <Text style={gStyles.backBtn}>back</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
