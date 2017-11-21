/**
 * Форма контактных данных.
 */
Ext.define('JetApp.view.contacts.Form', {
    extend: 'Ext.window.Window',
    xtype: 'app-contacts',

    requires: [
        'JetApp.view.contacts.FormController',
        'JetApp.view.contacts.FormModel'
    ],

    controller: 'contacts',
    viewModel: 'contacts',

    title: 'Контактные данные',

    height: 400,
    width: 500,

    modal: true,
    resizable: false,
    draggable: false,

    listeners: {
        show: 'onFormShow',
        close: 'onFormClose'
    },

    layout: 'fit',

    items: [
        {
            xtype: 'form',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                xtype: 'textfield',
                margin: 5
            },
            items: [
                {
                    fieldLabel: 'Фамилия',
                    bind: {
                        value: '{contact.lastName}'
                    }
                },
                {
                    fieldLabel: 'Имя',
                    bind: {
                        value: '{contact.firstName}'
                    }
                },
                {
                    fieldLabel: 'Отчество',
                    bind: {
                        value: '{contact.patronymic}'
                    }
                },
                {
                    xtype: 'grid',
                    plugins: [
                        {
                            ptype: 'cellediting',
                            listeners: {
                                beforeedit: 'onCellBeforeEdit',
                                edit: 'onCellEdit'
                            }
                        }
                    ],
                    columns: [
                        {
                            text: 'Тип контакта',
                            dataIndex: 'type',
                            flex: 1
                        },
                        {
                            text: 'Значение',
                            dataIndex: 'value',
                            flex: 2,
                            editor: {
                                xtype: 'textfield'
                            }
                        }
                    ],
                    // store: 'ContactRecords',
                    bind: {
                        store: '{records}'
                    },
                    listeners: {
                        reconfigure: 'onGridConfigured'
                    }
                }
            ],
            buttons: [
                {
                    text: 'ОК',
                    handler: 'onOkBtnClick'
                },
                {
                    text: 'Отмена',
                    handler: 'onCancelBtnClick'
                }
            ]
        }

    ]
});
