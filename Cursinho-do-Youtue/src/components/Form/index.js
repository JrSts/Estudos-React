import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard, Vibration } from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validatorImc(){
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            return
        } 
        setImc(null)
        setTextButton("Calcular IMC")
        setMessageImc("Preencha o peso e a altura")
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setHeight} 
                    value={height} 
                    placeholder='Ex: 1.90' 
                    keyboardType='numeric'
                />
                <Text  style={styles.formLabel}>Peso</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setWeight} 
                    value={weight} 
                    placeholder='Ex: 80.5'  
                    keyboardType='numeric'
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validatorImc()} 
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </Pressable>
    );
}