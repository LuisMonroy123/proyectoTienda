import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerScreenProps } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Alert, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { BotonCarrito } from '../components/BotonCarrito';

const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };
export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Inicio', headerShown: false }} component={StackNavigator} />

      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#4318A2',
          height: height / 15,
        },
        cardStyle: { backgroundColor: 'white' },
        headerTitleAlign: 'center',
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
    </Drawer.Navigator>
  );
}
interface RouterParams {
  usuario: string;
}
const MenuInterno = ({ navigation }: DrawerContentComponentProps, { route }: Props) => {
  {/*const params = route.params as RouterParams;*/ }
  return (
    <DrawerContentScrollView>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../image/profile-user.png')}
        />
        <Text style={styles.menuTexto}>
          Usuario
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: width / 15, height: height / 30 }}
              source={require('../image/house.jpeg')}
            />
            <Text style={{ color: 'black', fontSize: width / 20, marginHorizontal: width / 30 }}>
              Menú
            </Text>
          </View>
        </TouchableOpacity >

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: width / 10, height: height / 20, marginLeft: -width / 50 }}
              source={require('../image/user.jpeg')}
            />
            <Text style={{ color: 'black', fontSize: width / 20, marginTop: height / 150, marginHorizontal: width / 60 }}>
              Cuenta
            </Text>
          </View>
        </TouchableOpacity>
      </View>


    </DrawerContentScrollView>
  );
}