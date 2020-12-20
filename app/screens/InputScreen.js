import React, {useState} from 'react';
import { Switch, Text, TextInput } from 'react-native';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen'

const categories = [
    {label: "Furniture", value: 1},
    {label: "Clothing", value: 2},
    {label: "Cameras", value: 3},
];

function InputScreen(props) {
    const [firstName, setFirstName] = useState('');
    const [on, setOn] = useState(false);
    const [category, setCategory] = useState(categories[0]);

    return (
        <Screen>
            <AppTextInput 
                placeholder="email"
                icon="email"
            />

           
            <Switch
                value={on}
                onValueChange={(on) => setOn(on)}
            />

            <Text>{on ? "ture" : "false"}</Text>


            <AppPicker 
                items={categories}
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                icon="apps" 
                placeHolder="Category" />
        </Screen>
    );
}

export default InputScreen;