import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const gStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {},
  taskPreview: {
    backgroundColor: '#333',
    color: '#fff',
    width: width,
    textAlign: 'center',
    padding: 20,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
  },
  taskList: {
    backgroundColor: 'red',
    height: height - 10,
    marginTop: 50,
  },
  taskDetails: {
    backgroundColor: 'blue',
    width: width - 100,
    height: height / 3,
    borderColor: '#333',
    borderWidth: 4,
  },
})
