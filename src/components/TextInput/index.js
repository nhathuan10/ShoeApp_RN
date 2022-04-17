import { StyleSheet, View, TextInput as TEXTINPUT, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../themes/'
import PassIcon from 'react-native-vector-icons/Entypo'
import Text from '../../components/Text'

export default function TextInput(props) {
    const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);
    const [isPassWordNotShown, setIsPassWordNotShown] = useState(true);
    const showPassWord = () => {
        setSecureTextEntry(!secureTextEntry);
        setIsPassWordNotShown(!isPassWordNotShown);
    }
    const isShowError = !!props.errMsg && props.touched;

    return (
        <View style={styles.container}>
            <TEXTINPUT
                {...props}
                style={[styles.textInput, isShowError && styles.error]}
                secureTextEntry={secureTextEntry}
            />
            <Text style={styles.title} bold>{props.title}</Text>
            {props.password && (
                <TouchableOpacity style={props.errMsg ? styles.passIconError : styles.passIcon} onPress={showPassWord} >
                    <PassIcon
                        name={isPassWordNotShown ? 'eye-with-line' : 'eye'}
                        size={25}
                        color={isPassWordNotShown ? COLORS.semiBoldGray : COLORS.red}
                    />
                </TouchableOpacity>
            )}
            {isShowError && (
                <View style={{ width: '90%'}}>
                    <Text style={styles.errorText} italic>* {props.errMsg}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    textInput: {
        borderColor: COLORS.lightGray,
        borderWidth: 2,
        borderRadius: 12,
        width: '90%',
        color: COLORS.semiBoldGray,
        fontSize: 17,
        padding: 12,
        width: '90%',
        backgroundColor: COLORS.lightGray,
        fontFamily: 'Nunito-Bold',
    },
    title: {
        position: 'absolute',
        top: 4,
        left: 30,
        fontSize: 15,
        color: COLORS.main,
    },
    passIcon: {
        position: 'absolute',
        right: 30,
    },
    passIconError: {
        position: 'absolute',
        right: 30,
        top: 15,
    },
    error: {
        borderColor: COLORS.red,
        borderWidth: 3
    },
    errorText: {
        color: COLORS.red,
    }
})