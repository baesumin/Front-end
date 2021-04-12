import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const test = () => {
    return (
        <SafeAreaView
            style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}
            forceInset={{ top: 'always' }}
        >
            <View style={styles.actionbar}>
                <View style={styles.Group3}>
                    <View style={styles.Group1}>
                        <Text style={styles.talk}>대화하기</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    actionbar: {
        height: 56,
        top: 24,
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'gray'
    },
    Group3: {
        position: 'absolute',
        width: 136,
        height: 30,
        left: 12,
        top: 13,
        backgroundColor: 'green'
    },
    Group1: {
        position: 'absolute',
        width: 86,
        height: 23,
        //left: 12,
        top: 4,
        backgroundColor: 'blue'
    },
    talk: {
        position: 'absolute',
        width: 86,
        height: 22,
        //left: 12,
        //top: 17,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#00BFBE'
    },
    Line1: {
        position: 'absolute',
        width: 86,
        height: 22
    }
});

export default test;
