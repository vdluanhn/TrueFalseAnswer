import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
    marginTop: 0,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
  },
  numOfTrue: {
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
  },

  button: {
    fontSize: 12,
    color: '#000',
    backgroundColor: '#fff',
  },
  cycle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
  },
  squareLeft: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
  squareRight: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
  },
});
