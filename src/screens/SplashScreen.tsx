import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import { stylesU } from '../theme/userTheme';

interface Props extends StackScreenProps<any, any> { };


export const SplashScreen = ({ navigation }: Props) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MenuLateral')
        }, 3000);
    }, []);
    return (
        <View style = {stylesU.viewC}>
            <ActivityIndicator size='large' color = '#4318A2' style ={stylesU.load}/>
            <Text style = {stylesU.textC}>Espere un momento por favor</Text>
        </View>
    )
}
