import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  gradientIcon: {
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
