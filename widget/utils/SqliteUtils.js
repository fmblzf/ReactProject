/**
 * 
 * 本地数据库操作类
 * 
 */
var SQLite = require('react-native-sqlite-storage');
// SQLite.DEBUG(true);
SQLite.enablePromise(true);

const db_name = 'city.db';

var _db;
/**
 * 打开数据库
 * @return promise
 */
_openDb = () => {
    var promise = new Promise((resolve, reject) => {
        SQLite.openDatabase({ name: db_name, createFromLocation: "~city.db", location: 'Library' })
            .then((db) => {
                _db = db;
                resolve(db);
            }).catch((error) => {
                reject(error);
            });
    });
    return promise;
};
/**
 * 数据库执行sql
 * @param sql 带有占位符的sql
 * @param params 替换占位符中的参数
 * @return promise
 */
_executeSql = (sql, params) => {
    var promise = new Promise((resolve, reject) => {
        _openDb().then((db) => {
            db.transaction((tx) => {
                tx.executeSql(sql, params ? params : []).then(([tx, results]) => {
                    resolve(results);
                }).catch((error) => {
                    throw error;
                });
            }).then(() => {
                _closeDb();
            }).catch((error) => {
                _closeDb();
                reject(error);
            });
        }).catch((error) => {
            reject(error);
        });
    });
    return promise;
};
/**
 * 关闭数据库
 */
_closeDb = () => {
    if (_db) {
        _db.close().then((status) => {
            console.log("Database IS CLOSED");
        }).catch((error) => {
            console.log(error);
        });
    } else {
        console.log('Database is null');
    }
};
/**
 * 将数据查询获取的数据集合转化成json
 * 数据库获取的数据集合是json对象（应该是使用了协程的方法，避免一次性加载全部），而是动态的获取数据,
 * 所以下面方法在数据量很大时，不建议使用，防止数据量过大时，造成的内存溢出，所以限制默认只返回10条数据
 * @param cursor 数据集合
 * @param maxsize 返回数据集合的最大数量
 */
_convertCursorToJson = (cursor, maxsize = 10) => {
    let len = cursor.rows.length > maxsize ? maxsize : cursor.rows.length;
    var results = [];
    for (var i = 0; i < len; i++) {
        var row = cursor.rows.item(i);
        results.push(row);
    }
    return results;
};

var Sqlite = {
    executeSql: _executeSql,
    convertJson: _convertCursorToJson
};
/** 
 * 导出可被调用的模块
 */
module.exports = Sqlite;