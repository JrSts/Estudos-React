import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MeuComponente from './MeuComponente'

export default function App() {
    return ( 
        <View style = { styles.container }>
            <StatusBar style = "light" />

            <Text style={styles.title}> Meus Familiares </Text>  
            <ScrollView>
               <MeuComponente setNome="Larissa" setApelido="Amor"/>
               <MeuComponente setNome="Carminha" setApelido="Mãe"/>
               <MeuComponente setNome="Zé Carlos" setApelido="Pai"/>
               <MeuComponente setNome="Karla" setApelido="Irmã"/>
               <MeuComponente setNome="Junior" setApelido="Eu"/>
               <MeuComponente setNome="Ricardo" setApelido="Primo"/>
               <MeuComponente setNome="Luciana" setApelido="Cunhada"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: '#fff',
        fontSize: 25,
        padding: 50
    },
});