import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Platform, Text, TouchableWithoutFeedback, Modal, FlatList, PickerIOSItem } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyle from '../config/styles';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({icon, items, placeHolder, onSelectItem, selectedItem}) {
    
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
            <>
                <TouchableWithoutFeedback
                    onPress={() => setModalVisible(true)}
                >
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons 
                                style={styles.icon}
                                name={icon}
                                size={20}
                                color={colors.medium}
                                />}
                    <Text style={[defaultStyle.text, {flex: 1}]}>{selectedItem ? selectedItem.label : placeHolder}</Text>

                    <MaterialCommunityIcons 
                                name='chevron-down'
                                size={20}
                                color={colors.medium}
                                />
                </View> 
                </TouchableWithoutFeedback>
                <Screen>
                   <Modal 
                    
                    visible={modalVisible}
                    animationType="slide"
                    >
                    <Button  title="Close" onPress={() => setModalVisible(false)}></Button>
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem= {({item}) =>(
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    console.log(item);
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        ) }
                    />
                </Modal> 
                </Screen>
                
            </>   
            );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    
    icon: {
        marginRight: 10,
    },

    
    
    
})

export default AppPicker;