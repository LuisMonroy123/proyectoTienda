import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { stylesU } from '../theme/userTheme';
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { };

export const NuevoUsuario = ({ navigation }: Props) => {
    const [contra, setContra]=useState('');
    const [correo, setCorreo]=useState('');

    return (
        
        <KeyboardAvoidingView style={stylesU.container} behavior='position'>
            <View style={{ height: height / 10, flexDirection: 'column', backgroundColor: '#4318A2'}}>

                <Image
                    style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 40, }}
                    source={require('../image/logoWhite.png')}
                />
            </View>
            <Image
                style={stylesU.iconP}
                source={require('../image/logoSmall.png')}
            />
            <Text style={stylesU.textP}>Crear Usuario</Text>
            <Text style={stylesU.textS}>Ingrese un correo electronico y una contraseña unica</Text>
            {/*APARTADO PARA REGISTRAR USUARIO*/}
            <View>
                <Image
                    style={stylesU.iconS}
                    source={require('../image/NewUser.png')}
                />
                <TextInput
                    style={stylesU.inputS}
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='black'
                    onChangeText={correo=> setCorreo(correo)}
                    maxLength={30}
                />
                <Image
                    style={stylesU.iconS}
                    source={require('../image/password.png')}
                />
                <TextInput
                    style={stylesU.inputS}
                    placeholder='Contraseña'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='black'
                    onChangeText={contra=> setContra(contra)}
                    maxLength={30}
                />
            </View>
            <TouchableOpacity
                style={stylesU.boton1}
                onPress={() => navigation.navigate('AsignarNombre', {correo, contra})}
            >
                <Text style={stylesU.textBoton}>Siguiente</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
    )
}
