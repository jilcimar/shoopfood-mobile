import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {View ,Text, Image,  TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

import api from '../../services/api';


export default function Detalhes () {
    const navigation = useNavigation();
    const route = useRoute();

    const product = route.params.product;
    const whatsapp = route.params.whatsapp;
    const productId = product.id;
    const [urlImage, setUrlImage] = useState(['http://192.168.0.107:8000/images/default.png']);


    async function loadImagem () {
        const response = await api.get(`imagem/${productId}`);
        setUrlImage(response.data);
    };

    const message = `Olá, gostaria de comprar o ${product.nome} que está custando ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(product.valor)}.`

    function navigationBack() {
        navigation.goBack()
    }
    
    function sendCall() {
        Linking.openURL(`tel://${whatsapp}`);
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${whatsapp}&text=${message}`);
    }
    loadImagem();
    return(
        <View style={styles.container}> 
             <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.product}>
                <Image 
                source={{uri: `${urlImage}`}}
                  style={styles.imageDetalhes}/>
                <Text style={[styles.productProperty, {marginTop:0}]}>Produto:</Text> 
                <Text style={styles.productValue}>{product.nome}</Text> 

                <Text style={styles.productProperty}>Descrição:</Text> 
                <Text style={styles.productValue}>{product.descricao}</Text> 

                <Text style={styles.productProperty}>Valor:</Text> 
                <Text style={styles.productValue}>{Intl.NumberFormat('pt-BR', 
                        {style:'currency', currency:'BRL'}).format(product.valor)}</Text> 
            </View>
            <View style={styles.contact}>
                <Text style={styles.contactTitle}>Mate sua fome</Text> 
                <Text style={styles.contactTitle}>Faça o seu pedido!</Text> 

                <Text style={styles.contactDescription}>Clique no WhatsApp para enviar o seu pedido automaticamente ou ligue se preferir.</Text> 

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendCall}>
                        <Text style={styles.actionText}>Ligar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}