import React from 'react'
import { Dimensions, TextInput, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonBuscar } from './BotonBuscar'

const { width, height } = Dimensions.get('window');

export const Buscador = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#4318A2', width: width, height: height/14,}}>
            <TextInput
                style={styles.styleInput}
                placeholder="Que desea buscar"
                placeholderTextColor="rgba(34,34,34,0.75)"
            />
            <BotonBuscar />
        </View>
    )
}
