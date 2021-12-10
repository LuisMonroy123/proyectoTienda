import React from 'react'
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { NuevoUsuario } from '../screens/NuevoUsuario';
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { AsignarNombre } from '../screens/AsignarNombre';
import { StackNavigator } from './StackNavigator';
import { SplashScreen } from '../screens/SplashScreen';
import { MenuLateral } from './MenuLateral';

const { width, height } = Dimensions.get('window');
const Stack = createStackNavigator();

export const UsuarioNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        
        >
            <Stack.Screen name = "NuevoUsuario" component={NuevoUsuario}/>
            <Stack.Screen name = "AsignarNombre" component={AsignarNombre}/>
            {/*<Stack.Screen name = "StackNavigator" component={StackNavigator}/>*/}
            <Stack.Screen name = "SplashScreen" component={SplashScreen}/>
            <Stack.Screen name = "MenuLateral" component={MenuLateral}/>

        </Stack.Navigator>
    );
}
