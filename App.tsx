import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [buttonCounter, setButtonCounter] = React.useState(0);

  const handleClick = () => {
    setButtonCounter(buttonCounter + 1);
  }

  return (
    <View style={styles.container}>
      <Button
        color="purple"
        onPress={handleClick}
        title={buttonCounter % 2 == 0 ? "par" : "impar" }
        />
      <Text>Times clicked: {buttonCounter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
