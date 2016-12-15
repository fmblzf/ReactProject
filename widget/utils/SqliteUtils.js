/**
 * 
 * 本地数据库操作类
 * 
 */
//不能兼容android
var sqlite = require('react-native-sqlite');
/**
 * 打开数据库
 * @param  _dbname 数据库名称
 * @return promise
 */
var _open = (_dbname)=>{
  return new Promise((resolve, reject)=>{
    sqlite.open(_dbname,function(error,database){
      alert(123)
      if (error) {
        console.log("Failed to open database:", error);
        reject(error);
      }else{
        resolve(database);
      }
    })
  });
}
/**
 * 操作方法
 * @param  _dbname 数据库名称
 * @param  sql 带有占位符的sql语句
 * @param  params 替换占位符的参数
 * @return promise
 */
var _execute = (_dbname,sql,params)=>{  
  return new Promise((resolve, reject)=>{
    _open(_dbname)
    .then((database)=>{
      database.executeSQL(sql, params, (rowData)=>{
        resolve(rowData);
      }, (e)=>{
        if (e) {
          console.log("Failed to executeSQL "+": " +sql, error);
          reject(e);
        }else{
          database.close((closeError)=>{
            if (closeError) {
              console.log("Failed to close database:", closeError);
              reject(closeError);
            }
          });
        }
      });
    })
    .catch((error)=>{
      reject(error);
    })
  });
}
var Sqlite = {
  execute:_execute,
}
//导出可被调用的模块
module.exports = Sqlite;
