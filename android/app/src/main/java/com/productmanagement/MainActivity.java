package com.productmanagement;

import com.productmanagement.BuildConfig;
import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import com.facebook.react.ReactRootView;

public class MainActivity extends NavigationActivity {



  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
//  @Override
//  protected ReactActivityDelegate createReactActivityDelegate() {
//    return new DefaultReactActivityDelegate(
//        this,
//        getMainComponentName(),
//        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
//        DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
//        // If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
//        DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
//        );
//  }
  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(NavigationActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
