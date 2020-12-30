import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import useLocation from '../hooks/useLocation';
import {AppFormField, SubmitButton, AppForm } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';


const validationSchema = Yup.object().shape({
    //imagePicker: Yup.array().min(1, 'please select at least one image'),
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().required().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
});

const categories = [
    {label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp'},
    {label: 'Clothing', value: 2, backgroundColor: '#fd9644', icon: 'car'},
    {label: 'Camera', value: 3, backgroundColor: '#fed330', icon: 'camera'},
    {label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards'},
    {label: 'Clothing', value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel'},
    {label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball'},
    {label: 'Moives & Music', value: 7, backgroundColor: '#4b7bec', icon: 'headphones'},
    {label: 'Books', value: 8, backgroundColor: '#fed330', icon: 'cards'},
    {label: 'Other', value: 9, backgroundColor: '#fc5c65', icon: 'app'},

];

function ListEditScreen(props) {
   
    const location = useLocation();

    return (
        <Screen >
            <View style={styles.container}>

            <AppForm
                initialValues={{imagePicker:[], title: '', price: '', description: '', category: null}}
                onSubmit={values => console.log(location)}
                validationSchema={validationSchema}
            >

                <FormImagePicker
                    name='imagePicker'
                />

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
                    width="30%"
                    />


                <AppFormPicker
                    items={categories}
                    name="category"
                    placeHolder="category"
                    width="50%"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
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