import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const test = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text>test</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default test;
