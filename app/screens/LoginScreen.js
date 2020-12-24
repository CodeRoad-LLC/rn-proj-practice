import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import ButtonComponent from '../components/ButtonComponent';
import colors from '../config/colors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';

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

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
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
                       <ButtonComponent
                            style={{backgroundColor: colors.primary}}
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </>
                            )}
            </Formik>

            
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