import React from 'react';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

import {useFormikContext} from 'formik';
import { View } from 'react-native';
import AppPicker from '../AppPicker';

function AppFormPicker({items, name, placeHolder}) {
    const {values, setFieldValue, errors, touched} = useFormikContext();

    return (
        <>

            <AppPicker 
                items={items}
                selectedItem={values[name]}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeHolder={placeHolder} />

             <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;