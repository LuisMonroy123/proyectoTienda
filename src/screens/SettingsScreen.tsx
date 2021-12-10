import React from 'react'
import { Text, View } from 'react-native'

export const SettingsScreen = () => {
    return (
        <View style = {{justifyContent: 'center', flex:1}}>
            <Text style ={{color: 'black', fontSize: 20, textAlign: 'center'}}>
                En mantenimiento, favor de esperar nuevas actualizaciones
            </Text>
        </View>
    )
}
