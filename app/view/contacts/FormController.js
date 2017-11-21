/**
 * Контроллер формы контактных данных.
 */
Ext.define('JetApp.view.contacts.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.contacts',

    onFormShow: function () {
    },

    /**
     * Запускаем загрузку контактных данных из хранилища приложения.
     */
    onGridConfigured: function () {
        this.getViewModel().loadRecordsData();
    },

    /**
     * Обновляем количество заполненных записей при закрытии формы контактных данных.
     */
    onFormClose: function () {
        this.updateRecordsCount();
    },

    /**
     * Обновляем количество заполненных записей.
     */
    updateRecordsCount: function () {
        var me = this;
        var contact = me.getViewModel().get('contact');
        var recordsStore = JetApp.getApplication().getStore('ContactRecords');
        var count = recordsStore.query('relatedContactId', contact.get('id')).count();
        contact.set('recordsCount', count);
        contact.commit();
    },

    /**
     * Сохраняем введённые данные и закрываем форму.
     */
    onOkBtnClick: function () {
        var me = this;
        me.getViewModel().saveRecordsData();
        me.getView().close();
    },

    /**
     * Закрываем форму.
     */
    onCancelBtnClick: function () {
        this.getView().close();
    },

    /**
     * Перед редактированием значения устанавливаем соответствуюющий тип валидации.
     * @param {Ext.grid.plugin.CellEditing} editor
     * @param {Object} context
     */
    onCellBeforeEdit: function (editor, context, eOpts) {
        var editorField = context.column.getEditor();
        var validator = context.record.get('validator');
        if(Ext.isString(validator) || validator === null) {
            editorField.vtype = validator;
            editorField.validator = Ext.emptyFn();
        } else {
            editorField.validator = validator;
            editorField.vtype = null;
        }
    },

    /**
     * Проверяем валидность введённых данных и если данные валидные, сохраняем их.
     * @param {Ext.grid.plugin.CellEditing} editor
     * @param {Object} context
     */
    onCellEdit: function (editor, context) {
        var editorField = context.column.getEditor();
        if (editorField.isValid()) {
            context.record.commit();
        }
    }
});
