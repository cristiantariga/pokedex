import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Score} from '../../components';
import StatsStorage from '../../res/stats';

export function TabScores(props) {
  function resolveAbbreviation(currentStat) {
    const stat = StatsStorage.filter((item, index) => {
      return item.normal === currentStat;
    });

    return stat.length ? stat[0].abbrev : currentStat;
  }

  const {gradient, scores = []} = props;

  function renderAllScores() {
    return scores.map((score, index) => {
      return (
        <View style={styles.TabScores} key={index}>
          <View style={styles.scoreInfo}>
            <Text style={[styles.scoreAbbrev, {color: gradient[0]}]}>
              {resolveAbbreviation(score.name)}
            </Text>
            <Text style={styles.scoreNumber}>{score.value}</Text>
          </View>
          <Score gradient={gradient} score={score.value} />
        </View>
      );
    });
  }
  return renderAllScores();
}
