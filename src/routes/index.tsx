import {NavigationContainer} from '@react-navigation/native'
import { PublicRoutes } from './publics'
import { useState } from 'react'
import { PrivateRoutes } from './privates'
import { useAuthProvider } from '@contexts/AuthContext'


export function Routes() {
    const {isAuthenticated} = useAuthProvider();
    return (
        <NavigationContainer>
            { !isAuthenticated ? <PublicRoutes/>: <PrivateRoutes/>}
        </NavigationContainer>
    )
}