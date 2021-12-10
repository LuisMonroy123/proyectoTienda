import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };
export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent= {(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="StackNavigator" options ={{title: 'Inicio', headerShown: false}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options ={{title: 'Mi cuenta', headerShown: false}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
interface RouterParams{
  usuario: string;
}
const MenuInterno = ({navigation}: DrawerContentComponentProps, {route}:Props) =>{
  {/*const params = route.params as RouterParams;*/}
    return (
      <DrawerContentScrollView>
          <View style = {styles.imageView}>
            <Image 
              style = {styles.image}
              source = {require('../image/profile-user.png')}
            />
            <Text style={styles.menuTexto}>
              Bienvenido a Funko Town
            </Text>
          </View>

        <View style = {styles.menuContainer}>
          <TouchableOpacity 
          style={styles.menuItem}
          onPress={()=> navigation.navigate('StackNavigator')}
          >
            <Text style={styles.menuTexto}>
              MENU
            </Text>
          </TouchableOpacity >

          <TouchableOpacity 
          style={styles.menuItem}
          onPress={()=> navigation.navigate('SettingsScreen')}
          >
            <Text style={styles.menuTexto}>
              CUENTA
            </Text>
          </TouchableOpacity>
        </View>


      </DrawerContentScrollView>
    );
}