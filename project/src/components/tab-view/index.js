import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Tabs, TabScores, TabAbilities, TabMoves} from '../../components';
import {COLORS} from '../../res/enums';

export function TabView(props) {
  const {colors, stats, abilities, moves} = props;
  const [selectedTab, setSelectedTab] = useState(0);
  const mainColor = colors[0] || COLORS.BLACK_COLOR;

  function renderPanel(idPanel) {
    const panels = {
      0: () => {
        return <TabScores gradient={colors} scores={stats} />;
      },
      1: () => {
        return <TabAbilities mainColor={mainColor} abilities={abilities} />;
      },
      2: () => {
        return <TabMoves moves={moves} />;
      },
    };

    return panels[idPanel] ? panels[idPanel]() : console.log('error in tabs');
  }

  function onTabPress(id) {
    setSelectedTab(id);
  }

  return (
    <View style={styles.tabView}>
      <Tabs
        colors={colors}
        tabs={['Stats', 'Abilities', 'Moves']}
        onTabPress={onTabPress}
      />
      {renderPanel(selectedTab)}
    </View>
  );
}
