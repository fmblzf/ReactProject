/**
 * 热更新工具类
 * 本地数据库中保存当前app的版本号(version)，以及资源版本号(bundle)
 * 通过和服务器端交互获得当前app的版本号以及bundle的版本号，
 * 和本地的app版本进行比较：
 *  当app版本号一致，并且服务器端的bundle版本号大于当前的本地bundle版本号时，开始版本更新
 *  更新方式，可以进行配置（1）强制更新；（2）静默更新（3）提示更新
 * 当app本本号不一致，android直接下载服务端的apk安装；IOS直接跳转到appstore进行更新操作
 */

/**
 * 版本更新类集合
 */
class UpVersion {
    constructor(options) {};
};

__downloadBundle = () => {};
__downloadApk = () => {};
__resetJsBundle = () => {};
__installApk = () => {};
__jumpAppStore = () => {};
_checkVersion = () => {};
_updataVersion = () => {};

/**
 * 导出可调用的模块
 */
module.exports = UpVersion;