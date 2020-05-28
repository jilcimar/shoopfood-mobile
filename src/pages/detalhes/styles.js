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

    product: {
        padding: 24,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop:48,
    },

    productProperty: {
        marginTop:24,
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    productValue: {
        marginTop:8,
        fontSize:15,
        color: '#737380'
    },

    contact: {
        padding: 24,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    contactTitle: {
        fontWeight: 'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30,
    },

    contactDescription: {
        fontSize:15,
        color: '#737380',
        marginTop:16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
      backgroundColor: '#e02041',
      borderRadius: 8, 
      height: 50,
      width: '48%',
      justifyContent: 'center',
      alignItems: 'center',

    },

    actionText: {
        color:'#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    imageDetalhes: {
        width: 300, 
        height: 200,
        marginBottom:10,
    }
});

