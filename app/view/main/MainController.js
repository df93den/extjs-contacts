/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('JetApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: ['JetApp.view.contacts.Form'],

    alias: 'controller.main',

    /**
     * По двойному нажатию на конактное лицо открываем форму контактных данных.
     * @param {Ext.grid.Panel} grid
     * @param {JetApp.model.Contact} record
     */
    onItemDblClick: function (grid, record) {
        Ext.create('JetApp.view.contacts.Form',{
            viewModel: {
                type: 'contacts',
                data: {
                    contact: record
                }
            }
        }).show();
    },

    /**
     * Добавление контактного лица.
     */
    onAddCuttonClick: function () {
        var contact = Ext.create('JetApp.model.ContactRecord');
        JetApp.getApplication().getStore('Contacts').add(contact);
        Ext.create('JetApp.view.contacts.Form', {
            viewModel: {
                type: 'contacts',
                data: {
                    contact: contact
                }
            }
        }).show();
    }
});
