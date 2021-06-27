import React from 'react';
import { View, Text, Switch, Platform, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FilterSwitch;
