import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomButton from '../components/CustomButton';

const Login = () => {
  const passwordRef: any = useRef();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        testID="emailInput"
        style={styles.textInputStyles}
        placeholder="Enter your email"
        value={email}
        autoFocus={true}
        onChangeText={emailValue => setEmail(emailValue)}
        onSubmitEditing={() => passwordRef?.current?.focus()}
      />
      <TextInput
        testID="passwordInput"
        ref={passwordRef}
        style={styles.textInputStyles}
        placeholder="Enter your password"
        value={password}
        secureTextEntry
        onChangeText={passwordValue => setPassword(passwordValue)}
      />
      <CustomButton
        title={'Login'}
        onPress={() => Alert.alert('Success!', 'Login Successfully')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyles: {
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default Login;
