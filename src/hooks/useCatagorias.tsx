import React, { useState } from 'react'

export const useCatagorias = () => {
    {/*CATEGORIA DISNEY*/}
    const IMAGES1 = {
        disney1: require('../image/imageDisney/disney1.jpg'),
        disney2: require('../image/imageDisney/disney2.jpg'),
        disney3: require('../image/imageDisney/disney3.png'),
        disney4: require('../image/imageDisney/disney4.jpeg'),
        /*disney5: require('../image/disney5.jpg'),*/
    };

    const [categoria1, setcategoria1] = useState([
        { id: '1', image: IMAGES1.disney1, description: 'Funko-Pop |Disney Universe| Dumbo', price: 540 },
        { id: '2', image: IMAGES1.disney2, description: 'Funko-Pop |Disney Universe| Stich', price: 310 },
        { id: '3', image: IMAGES1.disney3, description: 'Funko-Pop |Disney Universe| Walrus', price: 499 },
        { id: '4', image: IMAGES1.disney4, description: 'Funko-Pop |Disney Universe| Wall-e', price: 289 },
    ]);


    {/*CATEGORIA DRAGON BALL*/}
    const IMAGES2 = {
        dragon1: require('../image/imageDragon/dragon1.jpg'),
        dragon2: require('../image/imageDragon/dragon2.jpeg'),
        dragon3: require('../image/imageDragon/dragon3.jpg'),
        dragon4: require('../image/imageDragon/dragon4.jpg'),
    };

    const [categoria2, setcategoria2] = useState([
        { id: '1', image: IMAGES2.dragon1, description: 'Funko-Pop |Dragon ball| Super Saiyan Goku', price: 399 },
        { id: '2', image: IMAGES2.dragon2, description: 'Funko-Pop |Dragon ball| Vegeta Over 9000', price: 799 },
        { id: '3', image: IMAGES2.dragon3, description: 'Funko-Pop |Dragon ball| Super Saiyan Vegito', price: 690 },
        { id: '4', image: IMAGES2.dragon4, description: 'Funko-Pop |Dragon ball| Frieza', price: 499 },

    ]);

    {/*CATEGORIA HARRY POTTER*/}
    const IMAGES3 = {
        harry1: require('../image/imageHarry/harry1.jpg'),
        harry2: require('../image/imageHarry/harry2.jpg'),
        harry3: require('../image/imageHarry/harry3.jpg'),
        harry4: require('../image/imageHarry/harry4.jpg'),
    };
    const [categoria3, setcategoria3] = useState([
        { id: '1', image: IMAGES3.harry1, description: 'Funko-Pop |Harry Potter| Gringotts Dragon', price: 1199 },
        { id: '2', image: IMAGES3.harry2, description: 'Funko-Pop |Harry Potter| Harry Potter', price: 499 },
        { id: '3', image: IMAGES3.harry3, description: 'Funko-Pop |Harry Potter| Draco Malfoy', price: 399 },
        { id: '4', image: IMAGES3.harry4, description: 'Funko-Pop |Harry Potter| Patronus Remus Lupin', price: 419 },
    ]);

    {/*CATEGORIA MARVEL*/}
    const IMAGES4 = {
        marvel1: require('../image/imageMarvel/marvel1.jpg'),
        marvel2: require('../image/imageMarvel/marvel2.jpg'),
        marvel3: require('../image/imageMarvel/marvel3.jpg'),
        marvel4: require('../image/imageMarvel/marvel4.jpeg'),
    };
    const [categoria4, setcategoria4] = useState([
        { id: '1', image: IMAGES4.marvel1, description: 'Funko-Pop |Marvel Venom| Carnage', price: 349 },
        { id: '2', image: IMAGES4.marvel2, description: 'Funko-Pop |Marvel| Spider-Man', price: 399 },
        { id: '3', image: IMAGES4.marvel3, description: 'Funko-Pop |Marvel Wanda-Vision| Vision', price: 349 },
        { id: '4', image: IMAGES4.marvel4, description: 'Funko-Pop |Marvel Loki| Kid Loki', price: 499 },
    ]);
    {/*CATEGORIA STAR WARS*/}
    const IMAGES5 = {
        starWars1: require('../image/imageStarWars/starWars1.jpg'),
        starWars2: require('../image/imageStarWars/starWars2.jpg'),
        starWars3: require('../image/imageStarWars/starWars3.jpg'),
        starWars4: require('../image/imageStarWars/starWars4.jpg'),
    };

    const [categoria5, setcategoria5] = useState([
        { id: '1', image: IMAGES5.starWars1, description: 'Funko-Pop |Star Wars The clon Wars| Anakin Skywalker', price: 349 },
        { id: '2', image: IMAGES5.starWars2, description: 'Funko-Pop |Star Wars The mandalorian| Boba Fett', price: 399 },
        { id: '3', image: IMAGES5.starWars3, description: 'Funko-Pop |Star Wars Concept| Han Solo Precio: $399', price: 399 },
        { id: '4', image: IMAGES5.starWars4, description: 'Funko-Pop |Star Wars| The Mandalorian with Grogu.', price: 399 },
    ]);

    const CATEGORY = {
        categoria1: require('../image/categoria3.png'),
        categoria2: require('../image/categoria5.png'),
        categoria3: require('../image/categoria2.jpg'),
        categoria4: require('../image/categoria4.jpg'),
        categoria5: require('../image/categoria1.png'),
    };
    const [categorias, setCategorias] = useState([
        { id: '1', name: 'Disney', categoria: CATEGORY.categoria1, resource: categoria1},
        { id: '2', name: 'Dragon Ball', categoria: CATEGORY.categoria2, resource: categoria2},
        { id: '3', name: 'Harry Potter', categoria: CATEGORY.categoria3, resource: categoria3},
        { id: '4', name: 'Marvel', categoria: CATEGORY.categoria4, resource: categoria4},
        { id: '5', name: 'Star Wars', categoria: CATEGORY.categoria5, resource: categoria5},
    ]);
    return {
    categoria1,
    categoria2,
    categoria3,
    categoria4,
    categoria5,
    categorias
    }
    
}
