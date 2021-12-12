import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export const SearchInput = () => {
    return (
        <View style={styles.containerSearch}>
            <View style={styles.subSearch}>
                <TextInput
                    placeholder='Buscar FUNKO'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Image
                    style = {styles.IconSize}
                    source = {require('../image/search.png')}
                />
            </View>
        </View>
    )
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    containerSearch: {
        //backgroundColor: 'red',
        //marginTop: top+10
    },
    subSearch: {
        backgroundColor: '#F3F1F3',
        borderRadius: width / 25,
        height: height / 15,
        paddingHorizontal: width / 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: width / 25
    },
    IconSize: {
        width: width / 15,
        height: height/30,
        //backgroundColor: 'red'
    },
});