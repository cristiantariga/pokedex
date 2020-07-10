import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailsCard: {
    flex: 1,
    marginTop: 200,
    backgroundColor: '#FAFAFA',
    borderTopStartRadius: 48,
    borderTopEndRadius: 48,
    alignItems: 'center',
    paddingTop: 50,
  },
  image: {
    position: 'absolute',
    height: 200,
    width: 200,
    marginTop: -150,
  },
  title: {
    fontSize: 40,
    color: '#4F4F4F',
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  typesLabel: {
    flexDirection: 'row',
  },
  type: {
    marginTop: -100,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
});
