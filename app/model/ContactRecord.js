/**
 * Модель записи контактных данных.
 */
Ext.define('JetApp.model.ContactRecord', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'relatedContactId'
        },
        {
            name: 'type'
        },
        {
            name: 'validator'
        },
        {
            name: 'value'
        }
    ]
});
