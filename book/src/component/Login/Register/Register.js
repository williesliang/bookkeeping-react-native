import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import KUILoginField from '~/common/KUILoginField/KUILoginField'
import KUIButton from '~/common/KUIButton/KUIButton'

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KUILoginField 
                    name={'手机号'} 
                    field={'请输入手机号'} 
                    style={styles.phone}
                    keyboardType={'numeric'}
                    isPhoneNumber={true}
                />
                <KUIButton 
                    name={'下一步'} 
                    onPress={()=>{}}
                    style={styles.button}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
    },
    phone: {
        marginTop: countcoordinatesX(40)
    },
    button: {
        marginTop: countcoordinatesX(40),
    }
});