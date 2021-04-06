import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <Spacer>
                        <Text h3>Sign up for Tracker</Text>
                    </Spacer>
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={(newEmail) => setEmail(newEmail)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Spacer />
                    <Input
                        secureTextEntry
                        label="Password"
                        value={password}
                        onChangeText={(newPassword) => setPassword(newPassword)}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {state.errorMessage ? (
                        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                    ) : null}
                    <Spacer>
                        <Button
                            title="Sign Up"
                            onPress={() => signup({ email, password })}
                        />
                    </Spacer>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Text style={styles.link}>
                            Already have an accont? Sign in instead
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    contentContainerStyle: {
        paddingVertical: 100
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue',
        marginLeft: 10
    }
});

export default SignupScreen;
