import database from '../datasource/FirebaseDS';

const eventTableName = 'event';

export const dsEventListOn = callback =>
  database
    .ref(eventTableName)
    .orderByKey()
    .on('value', callback);

export const dsEventListOff = () => database.ref('event').off();

export const dsEventAdd = (id, data) =>
  database.ref(`${eventTableName}/${id}`).set(data);
