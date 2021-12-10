import React, { useState } from 'react'
import { Dimensions } from 'react-native';

export const useProductos = () => {
    //Dimensions
    const { width, height } = Dimensions.get('window');
    const IMAGES = {
        funko1: require('../image/funko1.jpg'),
        funko2: require('../image/funko2.jpg'),
        funko3: require('../image/funko3.jpg'),
        funko4: require('../image/funko4.jpg'),
        funko5: require('../image/funko5.jpg'),
        funko6: require('../image/funko6.jpg'),
        funko7: require('../image/funko7.jpg'),
    };

    const [images, setImages] = useState([
        { id: '1', image: IMAGES.funko1, description: 'Funko-Pop |Disney Universe| Wall-e', price: 276 },
        { id: '2', image: IMAGES.funko2, description: 'Funko Pop Loki Niño Variante Loki Serie Disney Original', price: 590 },
        { id: '3', image: IMAGES.funko3, description: 'Funko Pop Freddie Mercury Queen Radio Ga Ga 1985', price: 399 },
        { id: '4', image: IMAGES.funko4, description: 'Funko Pop! Animation: Motu He-man', price: 499 },
        { id: '5', image: IMAGES.funko5, description: 'Funko Pop Anderson Silva Ufc', price: 1000 },
        { id: '6', image: IMAGES.funko6, description: 'Funko Pop Princesa Grumosa Adventure Time', price: 900 },
        { id: '7', image: IMAGES.funko7, description: 'Funko-Pop |Godzilla vs Kong| Mechagodzilla', price: 231 },
    ]);

    const CATEGORY = {
        categoria1: require('../image/categoria3.png'),
        categoria2: require('../image/categoria5.png'),
        categoria3: require('../image/categoria2.jpg'),
        categoria4: require('../image/categoria4.jpg'),
        categoria5: require('../image/categoria1.png'),
    };
    const [categorias, setCategorias] = useState([
        { id: '1', categoria: CATEGORY.categoria1 },
        { id: '2', categoria: CATEGORY.categoria2 },
        { id: '3', categoria: CATEGORY.categoria3 },
        { id: '4', categoria: CATEGORY.categoria4 },
        { id: '5', categoria: CATEGORY.categoria5 },
    ]);


    return {
        categorias,
        setCategorias,
        images,
        setImages,
        width,
        height,
    }
}
