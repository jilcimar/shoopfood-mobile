import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


const AppStack = createStackNavigator();

import Produtos from './pages/produtos';
import Detalhes from './pages/detalhes';

export default function Routes () {
    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="produtos" component={Produtos} />
                <AppStack.Screen name="detalhes" component={Detalhes} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}