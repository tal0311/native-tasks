import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const gStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {},
  taskPreview: {
    color: '#fff',
    width: width,
    textAlign: 'center',
    padding: 20,
    borderBottomColor: '#c7c7c7',
    borderBottomWidth: 1,
  },
  taskList: {
    // backgroundColor: 'red',
    height: height,
    marginTop: 50,
  },
  taskDetails: {
    flexDirection: 'column',
    padding: 10,
    position: 'relative',
    top: -500,
    left: 25,
    zIndex: 1000,
    backgroundColor: '#f4f4f4',
    width: width - 50,
    height: height / 3,
    borderColor: '#333',
    borderWidth: 4,
  },
  high: {
    backgroundColor: '#7b019f',
  },
  medium: {
    backgroundColor: '#ab5a00',
  },
  low: {
    backgroundColor: '#7a7a7a',
  },
  backBtn: {
    alignSelf: 'flex-end',
    bottom: 0,
    // left: 10,
    padding: 5,
    paddingHorizontal: 7,
    borderRadius: 3,
    color: '#fff',
    backgroundColor: '#333',
  },
  actionsContainer: {
    position: 'relative',
    bottom: -160,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'lightgreen',
  },
  priorityContainer: {
    flexDirection: 'row',
  },
  priority: {
    marginRight: 20,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'red',
  },
  doneBtn: {
    position: 'absolute',
    top: -30,
    right: 0,
    fontSize: 20,
  },
  isDone: {
    backgroundColor: '#afafaf',
  },
})
