/**
 * Главное представление - списсок контактов.
 */
Ext.define('JetApp.view.main.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'app-main',

    requires: [
        'JetApp.view.main.MainController',
        'JetApp.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    listeners: {
        itemdblclick: 'onItemDblClick'
    },

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            }
        }
    },
    
    tbar: [
        {
            xtype: 'button',
            text: 'Добавить контакт',
            handler: 'onAddCuttonClick'
        }
    ],

    columns: [
        {
            text: 'ФИО',
            dataIndex: 'fullName',
            flex: 1
        },
        {
            text: 'Количество контактов',
            dataIndex: 'recordsCount',
            width: 200
        }
    ],

    store: 'Contacts'
});
