package com.module_example;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
ReactNative에 등록할 패키지를 만들기
*/
public class ToastPackage implements ReactPackage{
   /*
    ArrayList를 만들고,
    그 안에 ToastModule을 등록해 반환
   */
  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext){
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new ToastModule(reactContext));
    return modules;
  }

  /*
    네이티브 UI 컴포넌트를 만들어서 등록
    지금은 필요없으므로, 빈 컴포넌트 반환
  */
  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext){
    return Collections.emptyList();
  }
}
