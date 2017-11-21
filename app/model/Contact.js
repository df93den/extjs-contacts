/**
 * Модель контактного лица.
 */
Ext.define('JetApp.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'firstName',
            type: 'string'
        },
        {
            name: 'lastName',
            type: 'string'
        },
        {
            name: 'patronymic',
            type: 'string'
        },
        {
            name: 'fullName',
            type: 'string',
            calculate: function (data) {
                return data.lastName + ' ' + data.firstName + ' ' + data.patronymic;
            }
        },
        {
            name: 'recordsCount',
            type: 'number'
        }
    ]
});
