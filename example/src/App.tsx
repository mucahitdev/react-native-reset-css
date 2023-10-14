import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Customizer, { customizeView } from 'react-native-reset-css';

export default function App() {
  Customizer.Text({
    style: {
      backgroundColor: 'yellow',
    },
  });

  customizeView({
    style: {
      backgroundColor: 'blue',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: 'green' }}>Result:</Text>
      <Text style={{ color: 'pink' }}>Result:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
