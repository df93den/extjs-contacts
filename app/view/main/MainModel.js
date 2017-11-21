/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('JetApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    requires: ['JetApp.model.Contact'],

    alias: 'viewmodel.main',

    data: {
        name: 'JetApp - Контакты'
    }

});
