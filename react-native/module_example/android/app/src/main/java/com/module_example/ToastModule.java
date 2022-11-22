package com.module_example;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

// ReactNative Java 모듈 상속
public class ToastModule extends ReactContextBaseJavaModule{
  //생성자로 초기값 설정 - 항상 해주어야함
  ToastModule(ReactApplicationContext context){
    super(context);
  }

  /* getName 메서드
    - 네이티브 모듈 이름 정하기
    - 이후에 js 코드에서 불러올 모듈 이름

    import { NativeModules } from 'react-native';
    const { ToastModule } = NativeModules;
  */
  @Override
  public String getName(){
    return "ToastModule";
  }

  /*
   @ReactMethod 를 붙여주면,
   이후 js 코드에서 호출 할 수 있다.

   @를 붙여주는 문법 - 데코레이터 문법

   message를 받아, 화면에 알림을 띄워주고
   duration을 받아, 화면에 보여줄 시간을 정한다 ( 0 짧음, 1 김 )

   ToastModule.show(message, duration);
   */
  @ReactMethod
  public void show(String message, int duration){
    // 생성자로 설정한, context 가져오기
    ReactApplicationContext context = getReactApplicationContext();

    Toast toast = Toast.makeText(context, message, duration);
    toast.show();
  }

  /*
    java에서 선언한 상수를,
    js에서 사용할 수 있도록 내보내기

    ToastModule.SHORT
     */
  @Override
  public Map<String, Object> getConstants(){
    final Map<String, Object> constants = new HashMap<>();
    constants.put("SHORT",Toast.LENGTH_SHORT);
    constants.put("LONG",Toast.LENGTH_LONG);
    return constants;
  }
}
