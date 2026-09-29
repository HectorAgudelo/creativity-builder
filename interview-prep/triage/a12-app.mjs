import hector from './a12-lib.mjs'
//import {test2} from './a12-lib.mjs'

console.log(hector()) //default
//console.log(test2()) //Module does not provide expo

// [15:22]$ node a12-app.mjs
// file:///home/hectordesk/Documents/Personal_Projects/typeScript/interview-prep/triage/a12-app.mjs:2
// import {test2} from './a12-lib.mjs'
//         ^^^^^
// SyntaxError: The requested module './a12-lib.mjs' does not provide an export named 'test2'
//     at #_instantiate (node:internal/modules/esm/module_job:254:21)
//     at async ModuleJob.run (node:internal/modules/esm/module_job:369:5)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:691:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

// Node.js v25.0.0