/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 */
define([], () => {

    const pageInit = (context) => {
        alert('Sales Order is opened!');
        return true;
    };

    return {
        pageInit: pageInit
    };
});