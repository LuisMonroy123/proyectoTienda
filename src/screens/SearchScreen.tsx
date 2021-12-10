import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { SearchInput } from '../components/SearchInput'
import { styles } from '../theme/appTheme'

const { width, height } = Dimensions.get('window');
export const SearchScreen = () => {
    
    return (
        <View style = {{flex:1, marginHorizontal: width/30}}>
            <SearchInput/>
        </View>
    )
}