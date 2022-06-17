import React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

function setNome(props){
    return props.nome;
}

function setApelido(props){
    return props.apelido;
}

export default function MeuComponente(props){
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> {props.setNome} </Text> 
            <Text style={styles.cardSubtitle}> {props.setApelido} </Text>
        </View>
    );
}

const styles = {
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 4,
        marginVertical: 6
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    cardSubtitle: {
        color: '#999'
    }
};