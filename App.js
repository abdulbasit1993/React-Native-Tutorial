import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters',
      //   [
      //     {
      //       text: 'Do not show again',
      //       onPress: () => console.warn('Do not show again Pressed!'),
      //     },
      //     {text: 'Cancel', onPress: () => console.warn('Cancel Pressed!')},
      //     {text: 'OK', onPress: () => console.warn('OK Pressed!')},
      //   ],
      //   {cancelable: true, onDismiss: () => console.warn('Alert dismissed!')},
      // );
      // ToastAndroid.show(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.SHORT,
      // );
      ToastAndroid.showWithGravity(
        'The name must be longer than 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      // ToastAndroid.showWithGravityAndOffset(
      //   'The name must be longer than 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,
      //   100,
      //   200,
      // );
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color="#00f"
      /> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}
      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
        underlayColor="#dddddd">
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    // backgroundColor: '#00ff00',
  },
});

export default App;
