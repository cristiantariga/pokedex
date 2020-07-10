import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  tabsOptions: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    padding: 5,
  },
  buttonTab: {
    borderRadius: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    margin: 2,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
});
