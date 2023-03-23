import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksScreen from '../screens/BooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

const BookNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Books"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontFamily: 'OpenSans_700Bold'
                }
            }}
        >
            <Stack.Screen
                name="Books"
                component={BooksScreen}
                options={{
                    title: 'Mis Libros',
                    headerTitleStyle: {
                        color: COLORS.text
                    },
                }}
            />

            <Stack.Screen
                name="Book"
                component={BookDetailScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    )
}

export default BookNavigator;

const styles = StyleSheet.create({});