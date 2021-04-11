import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default axios.create({
    baseURL: 'http://b228ab14b2a3.ngrok.io'
});
