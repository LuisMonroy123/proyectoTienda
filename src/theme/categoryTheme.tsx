import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styleC = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'blue'
    },
    view1:{
        borderBottomWidth: 3,
        flexDirection: 'row',
        //marginTop: height/500,
        marginHorizontal: width/20,
        //backgroundColor: 'red',
        borderBottomColor: '#4318A2',
        
    },
    title:{
        color: '#006441',
        fontSize: height/18,
        marginTop: height/30,
        marginLeft: width/25,
        //backgroundColor: 'blue',
        textAlign: 'center'
    },
    icon:{
        height:height/8,
        width:width/4,
        borderRadius: 100,
        marginVertical: height/100

    },
    image:{
        width:width/2.25,
        height: height/5,
        alignSelf: 'center',
        marginVertical: height/50
    },
    imageText:{
        color: 'black',
        fontSize: width/22,
        textAlign: 'center',
        marginVertical: height/200
    },
});