package com.reactproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.rnfs.RNFSPackage;
import com.remobile.zip.RCTZipPackage;
import com.remobile.filetransfer.RCTFileTransferPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import org.pgsqlite.SQLitePluginPackage;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new SQLitePluginPackage(),//注册Sqlite插件
          new MainReactPackage(),
            new RNFSPackage(),
            new RCTZipPackage(),
            new RCTFileTransferPackage()
      );
    }

    @Nullable
    @Override
    protected String getJSBundleFile() {
      //实现自定义jsbundle的路径设置,热更新时，可以做出判断加载
      String jsbundlepath = getFilesDir().getAbsolutePath()+"/index.android.bundle";
      File file = new File(jsbundlepath);
      return file!=null?jsbundlepath:null;
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
