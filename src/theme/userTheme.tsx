import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const stylesU = StyleSheet.create({
    container:{
        flex:1,
    },
    iconP:{
        //backgroundColor: 'red',
        width: width/3.8,
        height: height/6.3,
        marginHorizontal: width/30,
        marginTop: height/60,
    },
    textP:{
        fontSize: width/15,
        color:'#006441',
        alignSelf:'flex-end',
        bottom: height/10,
        marginRight: width/4.5
    },
    textS:{
        fontSize: width/19,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: width/10,
        marginBottom: height/20
    },
    inputS:{
        borderWidth: 1,
        borderColor: '#4318A2',
        marginHorizontal: width/20,
        marginVertical: height/100
    },
    iconS:{
        marginLeft: width/20,  
        marginTop: height/90      
    },
    boton1:{
        backgroundColor: '#4318A2',
        width: width/1.3,
        height:height/10,
        borderRadius: 8,
        alignContent: 'center',
        marginHorizontal: width/8.5,
        marginTop: height/20
    },
    textBoton:{
        color: 'white',
        fontSize: width/15,
        alignSelf: 'center',
        marginTop: height/40
    },
    //ASIGNAR NOMBRE USUARIO
    textpr:{
        fontSize: width/15,
        color:'#006441',
        alignSelf:'flex-end',
        bottom: height/10,
        marginRight: width/6.5
    },
    dosicon:{
        flexDirection: 'row'
    },
    iconS2:{
        marginTop: height/90    
    },
    //PANTALLA CARGA
    viewC:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textC:{
        fontSize: width/15,
        color:'black',
        alignSelf:'flex-end',
        marginTop: height/6,
        marginRight: width/7,
        textAlign: 'center'
    },
    load:{
        marginTop: height/8
    },
});