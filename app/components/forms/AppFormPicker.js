import React from 'react';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

import {useFormikContext} from 'formik';
import { View } from 'react-native';
import AppPicker from '../AppPicker';

function AppFormPicker({items, name, numberOfColumns, PickerItemComponent, placeHolder, width}) {
    const {values, setFieldValue, errors, touched} = useFormikContext();

    return (
        <>

            <AppPicker 
                items={items}
                numberOfColumns={numberOfColumns}
                selectedItem={values[name]}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeHolder={placeHolder}
                width={width}
                PickerItemComponent={PickerItemComponent}
                />

             <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormPicker;