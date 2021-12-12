import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { Buscador } from '../components/Buscador';
import { SearchInput } from '../components/SearchInput';

const { width, height } = Dimensions.get('window');

export const SettingsScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Buscador />
            <Image
                style={{ width: width / 2, height: height / 5, marginLeft: -width / 50, alignSelf: 'center', marginVertical: height / 15 }}
                source={require('../image/user.jpeg')}
            />
            <Text style={{ color: 'black', fontSize: 20, marginLeft: width / 8 }}>
                Usuario
            </Text>
            <View style={{ borderBottomColor: 'greey', borderBottomWidth: 1, marginTop: height/10, marginHorizontal: width/10 }}></View>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: width / 8, marginTop: height / 15 }}>
                Correo: usuario@gmail.com
            </Text>

            <Text style={{ color: 'black', fontSize: 20, marginLeft: width / 8, marginTop: height / 15 }}>
                Contraseña: **********
            </Text>
        </View>
    )
}