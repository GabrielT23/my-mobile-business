import {NavigationContainer} from '@react-navigation/native'
import { PublicRoutes } from './publics'
import { useState } from 'react'
import { PrivateRoutes } from './privates'


export function Routes() {
    const isAuthenticated = useState(true)
    return (
        <NavigationContainer>
            { !isAuthenticated ? <PublicRoutes/>: <PrivateRoutes/>}
        </NavigationContainer>
    )
}