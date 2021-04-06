import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <AuthForm
                        headerText="Sign Up for Tracker"
                        errorMessage={state.errorMessage}
                        submitButtonText="Sign Up"
                        onSubmit={({ email, password }) => signup({ email, password })}
                    />
                    <NavLink
                        routeName="Signin"
                        text="Already have an account? Sign in instead"
                    />
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
    }
});

export default SignupScreen;
