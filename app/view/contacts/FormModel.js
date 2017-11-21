/**
 * Модель формы контактных данных.
 */
Ext.define('JetApp.view.contacts.FormModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.contacts',

    data: {
        contact: null
    },

    stores: {
        records: {
            model: 'JetApp.model.ContactRecord',
            data: [
                {
                    type: 'Телефон',
                    relatedContactId: '{contact.id}'
                },
                {
                    type: 'email',
                    validator: 'email',
                    relatedContactId: '{contact.id}'
                },
                {
                    type: 'Адрес',
                    relatedContactId: '{contact.id}'
                }
            ]
        }
    },

    /**
     * Загружаем контактные данные выбранного контактного лица
     */
    loadRecordsData: function () {
        var me = this;
        var contact = me.get('contact');
        var recordsStore = JetApp.getApplication().getStore('ContactRecords');
        var recordsData = recordsStore.query('relatedContactId', contact.get('id')).getRange();
        Ext.Array.forEach(recordsData, function (record) {
            var localRecord = me.getStore('records').findRecord('type', record.get('type'), 0, false, false, true);
            localRecord.set('value', record.get('value'));
            localRecord.commit();
        });
    },

    /**
     * Сохраняем контактные данные выбранного контактного лица
     */
    saveRecordsData: function () {
        var me = this;
        var contact = me.get('contact');
        var recordsStore = JetApp.getApplication().getStore('ContactRecords');
        var recordsData = me.getStore('records').getRange();
        Ext.Array.forEach(recordsData, function (record) {
            if (record.get('value')) {
                var storedRecord = recordsStore.getAt(recordsStore.findBy(function (rec) {
                    return rec.get('relatedContactId') === contact.get('id') && rec.get('type') === record.get('type')
                }));
                if (storedRecord) {
                    storedRecord.set('value', record.get('value'));
                    storedRecord.commit();
                } else {
                    recordsStore.add(record.clone());
                }
            }
        });
    }

});
