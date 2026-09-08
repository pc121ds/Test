/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(["N/log"], (log) => {
    const beforeLoad = (context) => {
        log.debug('Before Load', 'Sales Order is being loaded!');
    };

    return {
        beforeLoad: beforeLoad
    };
});