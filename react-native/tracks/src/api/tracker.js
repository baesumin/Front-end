import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default axios.create({
    baseURL: 'http://00cc91884f95.ngrok.io'
});
