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

import { gStyles } from './../assets/globalStyles'

export const TaskDetails = () => {
  console.log('task Details')
  return (
    <View style={gStyles.taskDetails}>
      <Text style={{ color: 'blue' }}>task Details</Text>
    </View>
  )
}
