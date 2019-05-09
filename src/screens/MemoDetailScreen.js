import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoDetailHeader}>
          <Text style={styles.memoDetailTitle}>講座のアイデア</Text>
          <Text style={styles.memoDetailDate}>2019/05/08</Text>
        </View>

        <View style={styles.memoDetailContent}>
          <Text style={styles.memoDetailContentText}>講座アイデアの内容本文です。</Text>
        </View>

        <CircleButton type="edit" style={styles.memoEditButton}>
          {'\uf303'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoDetailHeader: {
    backgroundColor: '#17313C',
    height: 100,
    justifyContent: 'center',
    padding: 15,
  },
  memoDetailTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  memoDetailDate: {
    color: '#fff',
    fontSize: 15,
  },
  memoDetailContent: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoDetailContentText: {
    fontSize: 18,
  },
  memoEditButton: {
    top: 75,
    backgroundColor: '#fff',
  },
});

export default MemoDetailScreen;
