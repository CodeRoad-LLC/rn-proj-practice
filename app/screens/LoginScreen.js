import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import authApi from '../api/auth';
import ErrorMessage from '../components/forms/ErrorMessage';
import jwtDecode from 'jwt-decode';
import {AppFormField, SubmitButton, AppForm } from '../components/forms';
import AuthContext from '../auth/context';
import authStorage from '../auth/authStorage';
import useAuth from '../auth/useAuth';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});


function LoginScreen(props) {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);
    const handleSubmit = async({email, password}) => {
        const result = await authApi.login(email, password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    }

    return (
        <Screen >
            <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password" visible={loginFailed}/>
                <AppFormField
                    name="email"
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    />
                <AppFormField 
                    name='password'
                    placeholder="Password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="password"
                    secureTextEntry={true}
                    />
                <SubmitButton title="login"/>        
                   
            </AppForm>

            
            </View>
           
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
       width: 80,
       height: 80,
       alignSelf: 'center',
       marginTop: 50,
       marginBottom: 20,
    }
})

export default LoginScreen;