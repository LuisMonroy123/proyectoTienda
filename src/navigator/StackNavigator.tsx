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

const Stack = createStackNavigator();

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
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 28, alignSelf: 'center',marginLeft: width / 50, }}
                        onPress={() => Alert.alert('Has entrado al menú')}
                    >

                        <Image
                            style={{ width: width / 15, height: height / 25, alignSelf: 'center' }}
                            source={require('../image/menu.png')}
                        />
                    </TouchableOpacity>
                ),
                headerTitle: () => (

                    <View style={{ height: height / 15, flexDirection: 'column', }}>
                        <Image
                            style={{ width: width / 1.4, height: height / 18, alignSelf: 'center', marginTop: height / 150, }}
                            source={require('../image/logoWhite.png')}
                        />

                    </View>
                ),
            }}

        >

            <Stack.Screen name="screen1" component={screen1} options={({ navigation }) => ({
                headerRight: () => (
                        <BotonCarrito
                            accion={() => navigation.navigate('screen2')}
                        />
                ),

            })} />
            <Stack.Screen name="screen2" component={screen2} options={({ navigation }) => ({
                headerRight: () => (
                    <TouchableOpacity
                        style={{ width: width / 18, height: height / 26, marginRight: width / 30, }}
                        onPress={() => navigation.navigate('screen1')}
                    >
                        <Image
                            style={{ width: width / 14, height: height / 25, alignSelf: 'center', }}
                            source={require('../image/home.png')}
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
            })} />
        </Stack.Navigator>
    );
}