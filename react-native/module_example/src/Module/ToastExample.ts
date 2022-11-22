/* eslint-disable prettier/prettier */
import {NativeModules} from 'react-native';

const {ToastModule} = NativeModules;

interface ToastInterface {
  show(title: string, duration: number): void;
  SHORT: 0;
  LONG: 1;
}

export default ToastModule as ToastInterface;
