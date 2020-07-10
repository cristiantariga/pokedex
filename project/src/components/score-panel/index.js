import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {ScoreBlock} from '../../components';

export function ScorePanel(props) {
  const {power = 0, accuracy = 0, pp = 0, mainColor} = props;

  const scores = [
    {name: 'Base Power', score: power},
    {name: 'Accuracy', score: accuracy},
    {name: 'PP', score: pp},
  ];

  function renderScores() {
    return scores.map((score, index) => {
      const percentage = score.name === 'Accuracy' ? '%' : '';
      return (
        <ScoreBlock
          name={score.name}
          score={score.score}
          key={index}
          border={index !== 0}
          mainColor={mainColor}
          percentage={percentage}
        />
      );
    });
  }

  return <View style={styles.scorePanel}>{renderScores()}</View>;
}
