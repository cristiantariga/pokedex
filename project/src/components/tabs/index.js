import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

export function Tabs(props) {
  const {colors, tabs = [], onTabPress} = props;
  const [selectedTab, setSelectedTab] = useState(0);

  function getColorText(index) {
    return index === selectedTab ? {color: '#FFFFFF'} : {color: colors[0]};
  }

  function getBackgroundButton(index) {
    return index === selectedTab ? colors : ['transparent', 'transparent'];
  }

  function renderTabsOptions() {
    return tabs.map((item, index) => {
      return (
        <LinearGradient
          colors={getBackgroundButton(index)}
          style={styles.buttonTab}
          key={index}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab(index);
              onTabPress(index);
            }}>
            <Text style={[styles.buttonText, getColorText(index)]}>
              {' '}
              {item}{' '}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      );
    });
  }

  return <View style={styles.tabsOptions}>{renderTabsOptions()}</View>;
}
