import React from 'react';
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { screen1 } from '../screens/screen1';
import { screen2 } from "../screens/screen2";
import { Image, TouchableOpacity, Alert, View, Dimensions, TextInput } from 'react-native';
import { BotonCarrito } from '../components/BotonCarrito';
import { styles } from '../theme/appTheme';
import { screen3 } from '../screens/screen3';
import { BotonBuscar } from '../components/BotonBuscar';
import { Buscador } from '../components/Buscador';
import { CategoriasScreen } from '../screens/CategoriasScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootStackParams = {
    screen1: undefined,
    screen2: { id: string, image: any, description: string, price: number },
    screen3: { id: string, image: any, description: string, price: number },
    CategoriasScreen: { id: string, categoria: any, resource: any, name: string },
    SettingsScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();
const { width, height } = Dimensions.get('window');
export const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#4318A2',
                    height: height / 15,
                },
                cardStyle: { backgroundColor: 'white' },
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name="screen1" component={screen1} options={({ navigation }) => ({
                headerRight: () => (
                    <BotonCarrito
                        accion={() => navigation.navigate('screen2')}
                    />
                ),
                headerTitle: () => (

                    <View style={{ height: height / 15, flexDirection: 'column', }}>

                        <Image
                            style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 150, }}
                            source={require('../image/logoWhite.png')}
                        />
                    </View>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 28, alignSelf: 'center', marginLeft: width / 50, }}
                        onPress={() => navigation.toggleDrawer()}
                    >

                        <Image
                            style={{ width: width / 15, height: height / 25, alignSelf: 'center' }}
                            source={require('../image/menu.png')}
                        />
                    </TouchableOpacity>
                ),

            })} />
            <Stack.Screen name="screen2" component={screen2} options={({ navigation }) => ({
                /*headerRight: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 26, marginRight: width / 30, }}
                        onPress={() => navigation.navigate('screen1')}
                    >
                        <Image
                            style={{ width: width / 14, height: height / 25, alignSelf: 'center', }}
                            source={require('../image/home.png')}
                        />
                    </TouchableOpacity>
                ),*/
                headerTitle: () => (

                    <View style={{ height: height / 15, flexDirection: 'column', }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('screen1')}
                        >
                            <Image
                                style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 150, }}
                                source={require('../image/logoWhite.png')}
                            />
                        </TouchableOpacity>

                    </View>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 28, alignSelf: 'center', marginLeft: width / 50, }}
                        onPress={() => navigation.toggleDrawer()}
                    >

                        <Image
                            style={{ width: width / 15, height: height / 25, alignSelf: 'center' }}
                            source={require('../image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
            })} />
            <Stack.Screen name="screen3" component={screen3} options={({ navigation }) => ({
                headerRight: () => (
                    <BotonCarrito
                        accion={() => navigation.navigate('screen2')}
                    />
                ),
                headerTitle: () => (

                    <View style={{ height: height / 15, flexDirection: 'column', }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('screen1')}
                        >
                            <Image
                                style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 150, }}
                                source={require('../image/logoWhite.png')}
                            />
                        </TouchableOpacity>

                    </View>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 28, alignSelf: 'center', marginLeft: width / 50, }}
                        onPress={() => navigation.toggleDrawer()}
                    >

                        <Image
                            style={{ width: width / 15, height: height / 25, alignSelf: 'center' }}
                            source={require('../image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
            })} />
            <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} options={({ navigation }) => ({
                headerRight: () => (
                    <BotonCarrito
                        accion={() => navigation.navigate('screen2')}
                    />
                ),
                headerTitle: () => (
                    <View style={{ height: height / 15, flexDirection: 'column', }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('screen1')}
                        >
                            <Image
                                style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 150, }}
                                source={require('../image/logoWhite.png')}
                            />
                        </TouchableOpacity>

                    </View>
                ),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 28, alignSelf: 'center', marginLeft: width / 50, }}
                        onPress={() => navigation.toggleDrawer()}
                    >

                        <Image
                            style={{ width: width / 15, height: height / 25, alignSelf: 'center' }}
                            source={require('../image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
            })} />

        </Stack.Navigator>
    );
}