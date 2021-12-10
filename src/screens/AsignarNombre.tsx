import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { stylesU } from '../theme/userTheme'
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

interface RouterParams{
    contra: string;
    correo: string;
}

interface Props extends StackScreenProps<any, any> { };

export const AsignarNombre = ({ navigation, route }: Props) => {

    const params = route.params as RouterParams;
    const [usuario, setUsuario]=useState('');
    return (
        
        <KeyboardAvoidingView behavior='position'>
            <View style={{ height: height / 10, flexDirection: 'column', backgroundColor: '#4318A2' }}>

                <Image
                    style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 40, }}
                    source={require('../image/logoWhite.png')}
                />
            </View>
            <Image
                style={stylesU.iconP}
                source={require('../image/logoSmall.png')}
            />
            <Text style={stylesU.textpr}>Nombre Usuario</Text>
            <Text style={stylesU.textS}>Seleccione un Nombre unico para su Usuario</Text>
            {/*APARTADO PARA ASIGNAR NOMBRE*/}
            <View>
                <View style={stylesU.dosicon}>
                    <Image
                        style={stylesU.iconS}
                        source={require('../image/hombre.png')}
                    />
                    <Image
                        style={stylesU.iconS2}
                        source={require('../image/mujer.png')}
                    />
                </View>
                <TextInput
                    style={stylesU.inputS}
                    placeholder='Nombre Usuario'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='black'
                    onChangeText={usuario=> setUsuario(usuario)}
                    maxLength={15}
                />
            </View>
            <TouchableOpacity
                style={stylesU.boton1}
                onPress={() => navigation.navigate('SplashScreen', {usuario})}
            >
                <Text style={stylesU.textBoton}>Crear Usuario</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
    )
}
