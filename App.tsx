import React from 'react'
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { SearchScreen } from './src/screens/SearchScreen';
import { UsuarioNavigator } from './src/navigator/UsuarioNavigator';
import { CategoriasScreen } from './src/screens/CategoriasScreen';
LogBox.ignoreLogs(['Reanimated 2']);
export const App = () => {
  return (
    <NavigationContainer>
      {/*<StackNavigator/>*/}
      <MenuLateral/>
      {/*<SearchScreen/>*/}
      {/*<UsuarioNavigator/> */}
      {/*<CategoriasScreen/>*/}
    </NavigationContainer>
  )
}

export default App;