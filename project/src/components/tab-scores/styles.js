import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  TabScores: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 8,
  },
  scoreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    minWidth: 80,
  },
  scoreAbbrev: {
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  scoreNumber: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
  },
});
