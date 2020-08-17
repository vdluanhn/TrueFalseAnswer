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
    fontSize: 50,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Aerosol',
  },
  numOfTrue: {
    marginTop: 20,
    fontSize: 30,
    color: 'white',
    // fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'Buff',
  },
  valueParam: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'center',
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'font_number',
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
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
  },
  squareLeft: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  squareRight: {
    height: 100,
    width: 100,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
});
