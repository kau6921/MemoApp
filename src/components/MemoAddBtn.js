import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoAddBtn extends React.Component {
  render() {
    return (
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>
          +
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

export default MemoAddBtn;
