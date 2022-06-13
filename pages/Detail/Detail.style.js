import {StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageView: {},

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },

  infoView: {
    backgroundColor: 'white',
  },

  headerView: {
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: colors.gray200,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.red700,
  },

  headerOrigin: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.red700,
  },

  description: {
    fontSize: 15,
    color: colors.gray700,
    padding: 5,
  },

  buttonView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
