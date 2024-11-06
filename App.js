import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutMe from './components/greeting';
import MyLanguages from './components/languages';
import NotFound from './components/notFound';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="О Себе" component={AboutMe} />
                <Tab.Screen name="Мои языки программирования" component={MyLanguages} />
                <Tab.Screen name="Не найдено" component={NotFound} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
