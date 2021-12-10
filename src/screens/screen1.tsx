import React, { useState } from 'react'
import { Alert, Button, Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { useProductos } from '../hooks/useProductos';
import { Buscador } from '../components/Buscador';
import { useCatagorias } from '../hooks/useCatagorias';

interface Props extends StackScreenProps<any, any> { };

export const screen1 = ({ navigation }: Props) => {

    const {
        images,
        width,
        height
    } = useProductos();
    const {
        categoria1,
        categoria2,
        categoria3,
        categoria4,
        categoria5,
        categorias
    }=useCatagorias();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                backgroundColor='#4318A2'
                barStyle='light-content'
            />
            <Buscador />
            <ScrollView style={{ flex: 1 }}>

                {/*<View style={{ width: width, height: height/50 }}>
                    <Image
                        style={styles.image1}
                        source={require('../image/caratula.jpg')}
                    />
                </View>*/}

                <View style={styles.flatStyle}>
                    <Text style={styles.text2}>Categorias</Text>
                    <FlatList

                        data={categorias}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => navigation.navigate('CategoriasScreen', {
                                id: item.id,
                                categoria: item.categoria,
                                resource: item.resource,
                                name: item.name
                            })}
                            >
                                <View>
                                    <Image
                                        key={index}
                                        style={styles.imageFlat}
                                        resizeMode='contain'
                                        source={item.categoria}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                    <Image
                        style={styles.icon1}
                        source={require('../image/logoSmall.png')}
                    />
                    <Text style={styles.text1}>En base a tus busquedas</Text>
                </View>


                <View style={styles.carousel}>
                    <Carousel
                        layout='default'
                        data={images}
                        sliderWidth={width}
                        itemWidth={300}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => navigation.navigate('screen3', {
                                id: item.id,
                                image: item.image,
                                description: item.description,
                                price: item.price
                            })}
                            >
                                <Image
                                    key={index}
                                    style={styles.imageCarousel}
                                    resizeMode='contain'
                                    source={item.image}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: '2%' }}>
                    <Image
                        style={styles.icon1}
                        source={require('../image/logoSmall.png')}
                    />
                    <Text style={styles.text1}>Más vendidos</Text>
                </View>


                <View style={styles.carousel}>
                    <Carousel
                        layout='default'
                        data={images}
                        sliderWidth={width}
                        itemWidth={300}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => navigation.navigate('screen3', {
                                id: item.id,
                                image: item.image,
                                description: item.description,
                                price: item.price
                            })}
                            >
                                <Image
                                    key={index}
                                    style={styles.imageCarousel}
                                    resizeMode='contain'
                                    source={item.image}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>



            </ScrollView>
        </SafeAreaView>

    );
}
