import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS drinks (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, brewery TEXT NOT NULL, rating TEXT NOT NULL, imageUri TEXT NOT NULL);', 
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
    );
  });
});
return promise;
};

export const insertDrink = (title, brewery, rating, imageUri) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO drinks (title, brewery, rating, imageUri) VALUES (?, ?, ?, ?);`, 
        [title, brewery, rating, imageUri],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err)
        }
      );
    });
  });
  return promise;
};

export const fetchDrinks = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM drinks', 
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err)
        }
      );
    });
  });
  return promise;
};