import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

function AcountScreen(props) {
    return(
        <view style={styles.background}>
            <Text>hello</Text>
        </view>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.light,
    }
})

export default AcountScreen;