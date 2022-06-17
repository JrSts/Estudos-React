import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Fono - Login</Text>
        <View style={styles.formulario}>
          <Text style={styles.email}>Email</Text>
          <TextInput style={styles.inputEmail} placeholder='Email'></TextInput>
          <Text style={styles.password}>Senha</Text>
          <TextInput style={styles.inputPassword} placeholder='Senha'></TextInput>

          <Button style={styles.botao} title='Login'>Login</Button>

        </View>
        <View style={styles.footer}>
          <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
        </View>
      </View>
      <StatusBar style="auto" />
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

  card: {
    height: 400,
    width: 400,
    borderRadius: 15,
    backgroundColor: "#ff0666",
  },

  email: {
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
    color: '#fff',
  },

  password: {
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
    color: '#fff',
  },

  inputEmail: {
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },

  inputPassword: {
    borderColor: '#fff',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    marginBottom: 15
  },

  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
    alignSelf: 'center'
  },

  esqueceuSenha: {
    color: '#0000ff',
    alignSelf: 'center',
    padding: 15,
  },

  botao: {
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    shadowColor: '#0000ff'
  },

  formulario: {
    justifyContent: 'center',
    alignItems: 'center'
  },

});
