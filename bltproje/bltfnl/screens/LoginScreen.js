import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="E-mail"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Şifre"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton 
        buttonTitle="Giriş  "
        onPress={() => login(email, password)}
      />

     

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Hesap Oluştur
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#494949',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    
    fontSize: 28,
    marginBottom: 10,
    color: '#0EAE3E6',
  },
  navButton: {
    marginTop: 15,
  },
  
  navButtonText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#EAE3E6',
    
  },
});