import { Dimensions, StyleSheet } from "react-native";


const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
//**********PAGINA 1**********
    container: {
        flex: 1, backgroundColor: 'white',
    },
    viewInput: {
        alignContent: 'space-between', backgroundColor: '#4318A2', width: width, height: 52, flexDirection: 'row'
    },
    styleInput: {
        backgroundColor: 'white',  width: width/1.2, borderRadius: 5,  height:height/16, marginLeft:width/30, marginTop: height/150
    },
    image1: {
        width: width, height: height/4
    },
    image2: {
        width: 40, height: 40, marginHorizontal: 10, right: 15,
    },
    sellers: {
        flexDirection: 'row', alignItems: 'center', marginTop: 15
    },
    icon1: {
        width: 40, height: 40, marginHorizontal: 10,
    },
    text1: {
        color: 'green', marginRight: width/30, fontWeight: 'bold', fontSize: 17,
    },
    text2: {
        color: 'green', marginRight: 240, fontWeight: 'bold', fontSize: 17, marginVertical: height/100
    },
    carousel: {
        height: height/4, width:width, marginTop: height/50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 3,
    },
    imageCarousel: {
        width: width/2.5, height: height/2.5, alignSelf: 'center', bottom: height/13
    },
    imageFlat:{
        width: width/6, height: height/10, marginHorizontal: 10, borderRadius: 100, alignSelf: 'center'
    },
    flatStyle: {
        height: height/6, width:width, alignContent: 'center', backgroundColor: 'white',  borderRadius: 10, marginVertical: height/70,
    },


    //**********PAGINA 2**********
    constainer2:{
        flex:1, 
    },
    carritoMorado:{
        width: width/10, height: height/17, marginRight: '1%'
    },
    texto1:{
        fontSize: height/39, marginTop: height/100, fontWeight: 'bold', textAlign: 'center'
    },
    describe:{
        flexDirection: 'row', marginLeft: '23%', 
    },
    items:{
        width:width, height: '50%', backgroundColor: 'white', alignContent: 'center', borderBottomWidth:3, borderBottomColor: '#4318A2', marginBottom: '1%'
    },
    subitems1:{
        flexDirection: 'row', width: '80%', height: '25%',marginLeft:'20%'
    },
    subitems2:{
        flexDirection: 'row', alignContent: 'flex-start',
    },
    bin:{
        width: 30, height:30, marginLeft: '8%', marginHorizontal: '50%'
    },
    textoItem:{
        fontSize: width/22, marginTop: height/120, textAlign: 'center', width: width/2, height: height/16, 
    },
    imageItem:{
        width: '30%', height: '110%', alignSelf: 'center', marginTop:'5%'
    },
    boton:{
        width: width/12, height: height/22, borderColor: 'black', borderWidth: 1, marginHorizontal:5, alignItems: 'center', alignContent: 'center', marginTop: height/10.5,  marginLeft: width/25,borderRadius: 3
    },
    botonImage:{
        width: width/30, height: height/50, alignSelf: 'center'
    },
    botonImageC:{
        width: width/30, height: height/50,marginTop: height/100
    },
    price:{
        fontSize: 20, marginTop: 5, fontWeight: 'bold', alignSelf: 'center', marginHorizontal: '10%'
    },
    description:{
        width: '80%', height: '120%', 
    },
    cantidad:{
        width: width/12, height: height/22, fontWeight: 'bold', marginTop: height/10.5, borderRadius: 3, fontSize: height/35, textAlign: 'center', marginLeft: width/25
    },
    //PAGINA 3
    botonStyle1:{
        width: width/2.5,
        height: height/18,
        backgroundColor: '#4318A2', 
        marginHorizontal: width/30,
        marginLeft: width/13,
        borderRadius: 5,
        marginTop: height/50        
    },    
    botonStyle2:{
        width: width/2.5,
        height: height/18,
        backgroundColor: '#ADADAD', 
        marginHorizontal: width/30,
        borderRadius: 5,
        marginTop: height/50
    },
    textBoton:{
        fontSize: width/25,
        textAlign: 'center',
        color:'white',
        marginTop: height/100
    },
    tapBoton:{
        flexDirection: 'row', 
    },
    textoTap:{
        fontSize: height/39,  fontWeight: 'bold', textAlign: 'center', marginLeft: width/14
    },
    textoTap2:{
        fontSize: height/39,  fontWeight: 'bold', textAlign: 'center', marginLeft: width/3
    },
});