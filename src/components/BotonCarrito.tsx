import React from 'react'
import { Dimensions, Image, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get('window');
interface Props {
    accion?: () => void;
}

export const BotonCarrito = ({ accion }: Props) => {

    return (

            <TouchableOpacity
                style={{ width: width/18, height: height/26, marginRight: width/19,  }}
                onPress={accion}
            >
                <Image
                    style={{ width: width/14, height:height/25, alignSelf: 'center', }}
                    source={require('../image/carritocompras.png')}
                />
            </TouchableOpacity>


    )
}
