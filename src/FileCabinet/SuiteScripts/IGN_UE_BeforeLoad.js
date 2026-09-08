/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["N/log"], (log) => {
    const beforeLoad = (context) => {
        log.debug('Before Load', 'Sales Order is being loaded!');
    };
    const beforeSubmit = (context) => {
        log.debug('Before Submit', 'Sales Order is being submitted!');
    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit
    };
});