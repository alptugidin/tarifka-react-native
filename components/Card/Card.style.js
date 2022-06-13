import {StyleSheet} from 'react-native';
import {colors} from 'app/colors';

export const style = StyleSheet.create({
  main: {
    height: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    borderTopLeftRadius: 65 / 2,
    borderBottomLeftRadius: 65 / 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray400,
  },

  imageView: {
    flex: 1 / 4,
    padding: 5,
  },

  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 9999,
    borderBottomLeftRadius: 9999,
  },

  infoView: {
    flex: 3 / 4,
    justifyContent: 'center',
  },

  name: {
    fontSize: 20,
    color: colors.gray600,
  },

  touchable: {
    borderTopLeftRadius: 65 / 2,
    borderBottomLeftRadius: 65 / 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
