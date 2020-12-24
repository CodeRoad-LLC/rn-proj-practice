import React from 'react';
import ButtonComponent from './ButtonComponent';
import {useFormikContext} from 'formik';
import colors from '../config/colors';

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext();
    return (
        <ButtonComponent
            style={{backgroundColor: colors.primary}}
            title="Login"
            onPress={handleSubmit}
        />
    );
}

export default SubmitButton;