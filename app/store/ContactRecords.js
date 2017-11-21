/**
 * Хранилище контактных данных.
 */
Ext.define('JetApp.store.ContactRecords', {
    extend: 'Ext.data.Store',

    model: 'JetApp.model.ContactRecord',

    data: []
});
