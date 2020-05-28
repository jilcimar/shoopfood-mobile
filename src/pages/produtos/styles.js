import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight +20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },

    headerText: {
        fontSize: 15,
        color:'#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        marginBottom:16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        marginBottom:16,
        textAlign:"justify"
    },

    product: {
        padding: 24,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    productProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    productValue: {
        marginTop:8,
        fontSize:15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        marginTop:24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight:'bold',
    },

    productImage: {
        width:100,
        height: 100,
        borderRadius:50,
    },

    boxTituloImagem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },

    boxInfo: {
        flexDirection:'column',
        flex:1
    },


    productTitulo: {
        flex:1,
        fontSize:19,
        color: '#737380',
        fontWeight:'700',
    },

    boxImage: {
        flexDirection:'column',
        alignItems:'center'
    },
    
    productCategoria : {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop:8
    }
});

