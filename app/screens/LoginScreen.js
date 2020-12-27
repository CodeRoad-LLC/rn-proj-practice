import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import {AppFormField, SubmitButton, AppForm } from '../components/forms';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});


function LoginScreen(props) {

    return (
        <Screen >
            <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
            
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