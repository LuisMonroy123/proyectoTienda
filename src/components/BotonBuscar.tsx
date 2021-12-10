import React from 'react'
import { Image, SafeAreaView, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const BotonBuscar = () => {
    return (

        <TouchableOpacity
            style={{ width: width/12, height: height/20, marginHorizontal: width/30, marginTop: height/80}}
            onPress={() => Alert.alert('Has buscado tu producto')}
        >
            <Image
                style={{ width: 35, height: 35, alignSelf: 'center', }}
                source={require('../image/buscar.png')}
            />
        </TouchableOpacity>


)
}
