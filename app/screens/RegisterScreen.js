import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import {AppFormField, SubmitButton, AppForm } from '../components/forms';


const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
});


function RegisterScreen(props) {

    return (
        <Screen >
            <View style={styles.container}>

            <AppForm
                initialValues={{name:'', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="name"
                    placeholder="Name"
                    icon="account"
                    autoCorrect={false}
                    />
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
})

export default RegisterScreen;