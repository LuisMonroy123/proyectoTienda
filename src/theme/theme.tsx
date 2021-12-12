import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles3 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    img: {
        backgroundColor: 'white',
        width: width/1.5,
        height: height/3,
        alignSelf: 'center',
        marginVertical: height/50
    },
    nombre: {
        color: 'black',
        fontSize: width/22,
        width: width/1.7,
        height: height/12,
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    precio: {
        color: 'black',
        marginLeft: width/12,
        marginTop: height/50,
        fontSize: 20
    },
    cantidad: {
        color: 'black',
        marginLeft: width/12,
        marginTop: height/50,
        fontSize: 20,
        bottom: height/90
    },
    BotonCarrito: {
        width: width/2,
        height: height/20,
        alignSelf: 'center',
        borderRadius: 4,
        backgroundColor: '#4318A2',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderWidth: 1,
        marginTop: height/40
    },
    TextoCarrito: {
        color: 'white',
        fontSize: width/25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TextoDescripcion: {
        color: 'black',
        fontSize: width/30,
        textAlign: 'center',
        marginTop: height/30
    },
    Fb: {
        width: width/12,
        height: height/24,
        backgroundColor: 'white',
        marginStart: width/3,
        marginHorizontal: width/50
    },
    Tw: {
        width: width/12,
        height: height/24,
        backgroundColor: 'white',
        marginHorizontal: width/50
    },
    Co: {
        width: width/12,
        height: height/24,
        backgroundColor: 'white',
        marginHorizontal: width/50
    },
    CompartirTexto: {
        color: 'black',
        fontSize: width/25,
        fontWeight: 'bold'
    },
    TextoSeguro: {
        color: 'black',
        fontSize: width/25,
        fontWeight: 'bold',
        marginBottom: height/30
    },
    pago: {
        width: width/10,
        height: height/18,
        marginStart: width/2,
        //bottom: height/50
    },
    titulo: {

        fontSize: width/20, alignSelf: 'center', marginLeft: width/40, color: 'black'
    },
    BotonIzq:{
        
        height: height/22,
        width: width/15, marginHorizontal: width/40,
        alignSelf: 'center'
    },
    BotonDere:{
        height: height/22,
        width: width/15, marginHorizontal: width/40,  alignSelf: 'center'
    },
    fab:{
        backgroundColor:'white',
        width: width/12, height: height/22, borderColor: 'black', marginHorizontal:5, alignItems: 'center', alignContent: 'center',
        borderRadius:4,
        justifyContent:'center',
        borderBottomColor: 'black',
        borderWidth: 1,
    },
    fabtext:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        alignSelf:'center'
    }
});