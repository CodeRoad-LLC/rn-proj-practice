import React from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import {AppFormField, SubmitButton, AppForm } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().required().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
});

const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Clothing', value: 2},
    {label: 'Camera', value: 3}
];

function ListEditScreen(props) {

    return (
        <Screen >
            <View style={styles.container}>

            <AppForm
                initialValues={{title: '', price: '', description: '', category: null}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField
                    name="title"
                    placeholder="Title"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={255}
                    />

                <AppFormField
                    name="price"
                    placeholder="Price"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={8}
                    />


                <AppFormPicker
                    items={categories}
                    name="category"
                    placeHolder="category"
                />
                
                <AppFormField
                    name="description"
                    placeholder="Description"
                    autoCapitalize="none"
                    autoCorrect={false}
                    multiline
                    numberOfLines={3}
                    />

                
                <SubmitButton title="POST"/>        
                   
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

export default ListEditScreen;