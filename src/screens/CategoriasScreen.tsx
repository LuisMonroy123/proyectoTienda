import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Alert, FlatList, Image, Text, View, Dimensions, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Buscador } from '../components/Buscador';
import { useCatagorias } from '../hooks/useCatagorias';
import { RootStackParams } from '../navigator/StackNavigator';
import { styleC } from '../theme/categoryTheme';
const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<RootStackParams, 'CategoriasScreen'> { };

export const CategoriasScreen = ({ route, navigation }: Props) => {

    const params = route.params;
    const numColumns = 2;
    const {
        categoria1,
        categoria2,
        categoria3,
        categoria4,
        categoria5,
        categorias
    } = useCatagorias();
    return (
        <SafeAreaView style={styleC.container}>
            <Buscador />
            <View style={styleC.view1}>
                <Image
                    style={styleC.icon}
                    source={params.categoria}
                />
                <Text style={styleC.title}>{params.name}</Text>
            </View>
                <FlatList
                    data={params.resource}
                    numColumns={numColumns}
                    renderItem={({ item, index }) => (
                        <View style={{ justifyContent: 'center', marginTop: height / 30, height: height / 2.8, width: width / 2.2, marginHorizontal: width / 50,}}>
                            <TouchableOpacity
                                style={{  justifyContent: 'center', backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 10,
                                    height: 0,
                                },
                                shadowOpacity: 1.58,
                                shadowRadius: 16.00,
                                
                                elevation: 3,
                                }}
                                onPress={ () => navigation.navigate('screen3', {
                                        id: item.id,
                                        image: item.image,
                                        description: item.description,
                                        price: item.price
                                    })
                                }
                            >
                                <View>
                                    <Image
                                        style={styleC.image}
                                        key={index}
                                        resizeMode='contain'
                                        source={item.image}
                                    />
                                    <Text
                                        style={styleC.imageText}
                                    >{item.description}</Text>
                                    <Text style={styleC.imageText}>
                                        ${item.price}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
    )
}