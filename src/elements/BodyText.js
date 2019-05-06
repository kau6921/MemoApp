import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#fff',
  },
});

export default BodyText;
