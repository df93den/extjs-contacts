/**
 * Хранилище лиц из списка контактов.
 */
Ext.define('JetApp.store.Contacts', {
    extend: 'Ext.data.Store',

    model: 'JetApp.model.Contact',
    data: [
        {
            firstName: 'Иван',
            lastName: 'Иванов',
            patronymic: 'Иванович'
        },
        {
            firstName: 'Петр',
            lastName: 'Петров',
            patronymic: 'Петрович'
        }
    ]
});
