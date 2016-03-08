class Base {
    constructor() {
        // code
    }
    log(message) {
            console.log(message);
        }
        // methods
}
export default class Mod_Demo extends Base {
// module.export = class Mod_Demo extends Base {
    constructor(dom_id, $) {
            super();
            require.ensure([], function() {
            	require('./mod/mod_view.less');
                var mod_viwe = require('./mod/mod_view.html');
                $(mod_viwe).replaceAll('#'+dom_id);
            });
        }
        // methods
}
