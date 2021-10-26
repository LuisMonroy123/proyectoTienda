import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View, Image, SafeAreaView, Dimensions, ScrollView } from "react-native";
import { styles3 } from '../theme/theme';
import { styles } from '../theme/appTheme';
import { Buscador } from '../components/Buscador';
const { width, height } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { };

export const screen3 = ({ navigation }: Props) => {
    const [contador, setContador] = useState(1);
    return (
        <ScrollView style={styles3.container} >
            <Buscador />
            <Image style={styles3.img} source={require('../image/funko7.jpg')}></Image>
            <Text style={styles3.nombre}>Funko-Pop |Godzilla vs Kong| Mechagodzilla</Text>
            <Text style={styles3.precio}>Precio:      $276</Text>

            <View style={{ flexDirection: 'row', width: width }} >
                <Text style={styles3.cantidad}>Cantidad: </Text>
                <TouchableOpacity
                    style={styles3.BotonIzq}
                    onPress={() => setContador(contador + 1)}
                >
                    <View style={styles3.fab}>
                        <Image
                            style={styles.botonImage}
                            source={require('../image/subtraction.png')}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles3.titulo}>
                    {contador}</Text>
                <TouchableOpacity
                    style={styles3.BotonDere}
                    onPress={() => setContador(contador - 1)}
                >
                    <View style={styles3.fab}>
                        <Image
                            style={styles.botonImage}
                            source={require('../image/plus.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('screen2')} style={styles3.BotonCarrito}>
                <Text style={styles3.TextoCarrito}>Agregar al carrito</Text>
            </TouchableOpacity>
            <Text style={styles3.TextoDescripcion}>Recibe tu compra entre 3 a 5 días, productos de preventa se
                entregan a partir de la fecha establecida.
            </Text>
            <View style={{ flexDirection: 'row',marginTop: height/60  }}>
                <Text style={styles3.CompartirTexto}>Compartir producto</Text>
                <Image source={require('../image/db.png')} style={styles3.Fb}></Image>
                <Image source={require('../image/tw.png')} style={styles3.Tw}></Image>
                <Image source={require('../image/co.png')} style={styles3.Co}></Image>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: height/30 }}>
                <Text style={styles3.TextoSeguro}>Compra 100% Segura</Text>
                <Image source={require('../image/pago.png')} style={styles3.pago}></Image>
            </View>


        </ScrollView>
    )
}