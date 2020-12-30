import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';

function FormImagePicker({name}) {

    const {values, setFieldValue, errors, touched} = useFormikContext();
  
    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    }

    const handleDelete = (uri) => {
        setFieldValue(name, values[name].filter(imageUri => imageUri !== uri));
    }

    return (
    <>
        <ImageInputList
            imageUris={values[name]} 
            onAddImage={handleAdd}
            onRemoveImage={handleDelete}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}



export default FormImagePicker;