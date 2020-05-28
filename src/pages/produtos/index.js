import React , {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { apisAreAvailable } from 'expo';

import api from '../../services/api';

export default function Produtos () {
    const [products, setProducts] = useState([]);
    const [whatsapp, setWhatsapp] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    const navigation = useNavigation();

    function navigationToDetails(product,whatsapp) {
        navigation.navigate('detalhes', {
            product: product,
            whatsapp:whatsapp,
        });
    }

    async function loadProducts () {
        if(loading) {
            return;
        }

        if(total>0 && products.length == total) {
            return;
        }

        setLoading(true);

        const response = await api.get('produtos', {
            params: {page}
        });
        setProducts([... products, ... response.data.data])
        // setProducts(response.data);

        //Pegando o total de produtos
        setTotal(response.data.total);
        setWhatsapp(response.data.whatsapp);
        setPage(page+1);
        setLoading(false);
    }

    function loadImage(product) {
        if(product.foto) {
            return `http://192.168.0.107:8000/storage/${product.foto}`;
        }

        return `http://192.168.0.107:8000/images/default.png`;
    }

    useEffect(()=> {
        loadProducts();
    }, []);
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText} >
                Total de <Text style={styles.headerTextBold}> {total} produtos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo(a)</Text> 
            <Text style={styles.description}>Escolha um produto do nosso cardápio e peça automaticamente pelo WhatsApp</Text> 
            
            <FlatList 
                data={products}
                style={styles.productsList}
                keyExtractor={product => String(product.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProducts}
                onEndReachedThreshold={0.2}
                renderItem= {({item:product }) => (
                    <View style={styles.product}>
                        <View style={styles.boxTituloImagem}>
                            <View style={styles.boxInfo}>
                                <Text style={styles.productTitulo}>{product.nome}</Text> 
                                <Text style={styles.productProperty}>Valor:</Text> 
                                <Text style={styles.productValue}>{Intl.NumberFormat('pt-BR', 
                                    {style:'currency', currency:'BRL'}).format(product.valor)}</Text> 
                            </View>
                            <View style={styles.boxImage}>
                                <Image
                                    source={{
                                    uri: loadImage(product)
                                    }}
                                    style={styles.productImage}
                                />
                                <Text style={styles.productCategoria}>{product.categoria.nome}</Text> 
                            </View>
                        </View>
            
                    
                        <TouchableOpacity 
                        style={styles.detailsButton} onPress={() => navigationToDetails(product, whatsapp)}
                        >
                        <Text style={styles.detailsButtonText}>Ver detalhes e Pedir</Text>

                        <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}