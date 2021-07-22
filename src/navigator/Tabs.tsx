import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from './Tab1';
import { Platform } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
             backgroundColor: 'white'
        }}
        tabBarOptions={{
            activeTintColor: '#5856D6',
            labelStyle: {
                marginBottom: (Platform.OS === 'ios') ? 0 : 10
            },
            style:{
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.92)',
                elevation: 0,
                borderWidth: 0,
                height: (Platform.OS === 'ios') ? 80 : 60
            }
        }}
    >
      <Tab.Screen 
          name="HomeScreen" 
          component={Tab1Screen} 
          options={{
              tabBarLabel: "Listado",
              tabBarIcon: ({color}) => (
                  <Icon 
                      color={color}
                      size={25}
                      name="list-outline"/>
              )
          }}
      />
      <Tab.Screen 
           name="SearchScreen" 
           component={Tab2Screen} 
           options={{
            tabBarLabel: "Busqueda",
            tabBarIcon: ({color}) => (
                <Icon 
                    color={color}
                    size={25}
                    name="search-outline"/>
            )
          }}     
      />
    </Tab.Navigator>
  );
}