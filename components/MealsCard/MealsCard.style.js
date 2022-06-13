import {Dimensions, StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  textView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 5,
  },
  text: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'right',
  },

  shortText: {
    paddingRight: 5,
  },

  touchable: {
    borderRadius: 10,
  },
});
