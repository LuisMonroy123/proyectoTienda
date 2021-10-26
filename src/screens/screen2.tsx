import React, { useState } from 'react'
import { Alert, Dimensions, FlatList, Image, KeyboardAvoidingView, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Buscador } from '../components/Buscador';
import { useProductos } from '../hooks/useProductos'
import { styles } from '../theme/appTheme';

export const screen2 = () => {
    const { width, height } = Dimensions.get('window');
    const [contador, setContador] = useState(1);
    const {
        categorias,
        setCategorias,
        images,
        setImages,
    } = useProductos();
    return (
        <SafeAreaView style={styles.constainer2}>
                <View style={styles.describe}>
                    <Image
                        style={styles.carritoMorado}
                        source={require('../image/carritoMorado.png')}
                    />
                    <Text style={styles.texto1}>Resumen del Carrito</Text>
                {/*COMPRA DE FUNKO 1*/}
            </View>

            <FlatList
                style={{ alignContent: 'center' }}
                data={images}
                renderItem={({ item, index }) => (
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'purple', height: height / 3, marginBottom: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: width / 3 }}>
                            <Text style={styles.textoItem}>{item.description}</Text>
                            <TouchableOpacity onPress={() => Alert.alert('Has eliminado este producto')}>
                                <Image
                                    style={styles.bin}
                                    source={require('../image/bin.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                key={index}
                                style={{ height: height / 6, width: width / 3, alignSelf: 'flex-start', marginTop: height / 20 }}
                                resizeMode='contain'
                                source={item.image}
                            />
                            <TouchableOpacity style={styles.boton} onPress={() => setContador(contador - 1)}>
                                <Image
                                    style={styles.botonImageC}
                                    source={require('../image/subtraction.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.cantidad}>{contador}</Text>
                            <TouchableOpacity style={styles.boton} onPress={() => setContador(contador + 1)}>
                                <Image
                                    style={styles.botonImageC}
                                    source={require('../image/plus.png')}
                                />
                            </TouchableOpacity>
                            <Text style={styles.price}>${item.price * contador}</Text>
                        </View>


                    </View>
                )}
                //horizontal={true}
                showsVerticalScrollIndicator={false}
            />
            <View style={{ borderTopWidth: 2, borderColor: 'black', width:width, height: height/8 }}>
            <View style={styles.tapBoton}>
                <Text style = {styles.textoTap}>Total de compra:</Text>
                <Text style = {styles.textoTap2}>$276</Text>
                </View>
                <View style={styles.tapBoton}>
                    <TouchableOpacity style={styles.botonStyle1} onPress={() => Alert.alert('Has confirmado tu compra')}>
                        <Text style={styles.textBoton}>Confirmar compra</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botonStyle2} onPress={() => Alert.alert('Has cancelado tu compra')}>
                        <Text style={styles.textBoton}>Cancelar compra</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}
