import { __cargo_web_snippet_0326c402a09df06eb668ad14bff6431717298466 } from './snippets/wasm-thread-cecb06797fc8626d/inline0.js';
import { __cargo_web_snippet_4d3d71d2849c3ecc535f0d5fa22c11d269d0907b } from './snippets/wasm-thread-cecb06797fc8626d/inline2.js';
import { __cargo_web_snippet_8386e4e681ee465c720590a6869cd26bbc72cba3 } from './snippets/wasm-thread-cecb06797fc8626d/inline3.js';
import { wasm_bindgen_initialize } from './snippets/stdweb-46e48418af82516d/inline250.js';
import { __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0 } from './snippets/stdweb-46e48418af82516d/inline439.js';
import { __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723 } from './snippets/stdweb-46e48418af82516d/inline442.js';
import { __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6 } from './snippets/stdweb-46e48418af82516d/inline443.js';
import { __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf } from './snippets/stdweb-46e48418af82516d/inline444.js';
import { __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63 } from './snippets/stdweb-46e48418af82516d/inline445.js';
import { __cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec } from './snippets/stdweb-46e48418af82516d/inline593.js';

const __exports = {};
let wasm;

/**
* @returns {void}
*/
export function main() {
    return wasm.main();
}

__exports.main = main;

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function __wbg_cargowebsnippet0326c402a09df06eb668ad14bff6431717298466_d21b3cffd30e05bf(arg0, arg1) {
    return __cargo_web_snippet_0326c402a09df06eb668ad14bff6431717298466(takeObject(arg0), arg1);
}

__exports.__wbg_cargowebsnippet0326c402a09df06eb668ad14bff6431717298466_d21b3cffd30e05bf = __wbg_cargowebsnippet0326c402a09df06eb668ad14bff6431717298466_d21b3cffd30e05bf;
/**
* @returns {void}
*/
export function fuck() {
    return wasm.fuck();
}

__exports.fuck = fuck;

function __wbg_cargowebsnippet4d3d71d2849c3ecc535f0d5fa22c11d269d0907b_3b02358766c27519(arg0, arg1, arg2, arg3) {
    return __cargo_web_snippet_4d3d71d2849c3ecc535f0d5fa22c11d269d0907b(takeObject(arg0), arg1, arg2, arg3);
}

__exports.__wbg_cargowebsnippet4d3d71d2849c3ecc535f0d5fa22c11d269d0907b_3b02358766c27519 = __wbg_cargowebsnippet4d3d71d2849c3ecc535f0d5fa22c11d269d0907b_3b02358766c27519;

function __wbg_cargowebsnippet8386e4e681ee465c720590a6869cd26bbc72cba3_75402ed9de897010(arg0, arg1) {
    return __cargo_web_snippet_8386e4e681ee465c720590a6869cd26bbc72cba3(takeObject(arg0), arg1);
}

__exports.__wbg_cargowebsnippet8386e4e681ee465c720590a6869cd26bbc72cba3_75402ed9de897010 = __wbg_cargowebsnippet8386e4e681ee465c720590a6869cd26bbc72cba3_75402ed9de897010;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function __widl_f_data_MessageEvent(arg0) {
    return addHeapObject(getObject(arg0).data);
}

__exports.__widl_f_data_MessageEvent = __widl_f_data_MessageEvent;

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

function __widl_f_new_Worker(arg0, arg1, exnptr) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        return addHeapObject(new Worker(varg0));
    } catch (e) {
        handleError(exnptr, e);
    }
}

__exports.__widl_f_new_Worker = __widl_f_new_Worker;

function __widl_f_post_message_Worker(arg0, arg1, exnptr) {
    try {
        getObject(arg0).postMessage(getObject(arg1));
    } catch (e) {
        handleError(exnptr, e);
    }
}

__exports.__widl_f_post_message_Worker = __widl_f_post_message_Worker;

function __widl_f_set_onmessage_Worker(arg0, arg1) {
    getObject(arg0).onmessage = getObject(arg1);
}

__exports.__widl_f_set_onmessage_Worker = __widl_f_set_onmessage_Worker;

function __widl_f_set_onerror_Worker(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
}

__exports.__widl_f_set_onerror_Worker = __widl_f_set_onerror_Worker;

function __wbg_from_67e404397460d3b1(arg0) {
    return addHeapObject(Array.from(getObject(arg0)));
}

__exports.__wbg_from_67e404397460d3b1 = __wbg_from_67e404397460d3b1;

function __wbg_shift_ca264a2e67cbb022(arg0) {
    return addHeapObject(getObject(arg0).shift());
}

__exports.__wbg_shift_ca264a2e67cbb022 = __wbg_shift_ca264a2e67cbb022;

function __wbg_wasmbindgeninitialize_c17bb5736a6cd13f(arg0, arg1, arg2, arg3) {
    return addHeapObject(wasm_bindgen_initialize(takeObject(arg0), takeObject(arg1), getObject(arg2), getObject(arg3)));
}

__exports.__wbg_wasmbindgeninitialize_c17bb5736a6cd13f = __wbg_wasmbindgeninitialize_c17bb5736a6cd13f;

function __wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_2149c9169ec2336e(arg0, arg1) {
    return __cargo_web_snippet_80d6d56760c65e49b7be8b6b01c1ea861b046bf0(takeObject(arg0), arg1);
}

__exports.__wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_2149c9169ec2336e = __wbg_cargowebsnippet80d6d56760c65e49b7be8b6b01c1ea861b046bf0_2149c9169ec2336e;

function __wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_60857d6a328c5ce1(arg0, arg1, arg2, arg3) {
    return __cargo_web_snippet_72fc447820458c720c68d0d8e078ede631edd723(takeObject(arg0), arg1, arg2, arg3);
}

__exports.__wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_60857d6a328c5ce1 = __wbg_cargowebsnippet72fc447820458c720c68d0d8e078ede631edd723_60857d6a328c5ce1;

function __wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_4d6a8b798885113c(arg0, arg1, arg2) {
    return __cargo_web_snippet_97495987af1720d8a9a923fa4683a7b683e3acd6(takeObject(arg0), arg1, arg2);
}

__exports.__wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_4d6a8b798885113c = __wbg_cargowebsnippet97495987af1720d8a9a923fa4683a7b683e3acd6_4d6a8b798885113c;

function __wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce624dc8989b7508(arg0) {
    return __cargo_web_snippet_dc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf(takeObject(arg0));
}

__exports.__wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce624dc8989b7508 = __wbg_cargowebsnippetdc2fd915bd92f9e9c6a3bd15174f1414eee3dbaf_ce624dc8989b7508;

function __wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_2a1ad3082d10f29f(arg0) {
    return __cargo_web_snippet_1c30acb32a1994a07c75e804ae9855b43f191d63(takeObject(arg0));
}

__exports.__wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_2a1ad3082d10f29f = __wbg_cargowebsnippet1c30acb32a1994a07c75e804ae9855b43f191d63_2a1ad3082d10f29f;

function __wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_01dfb68202885677(arg0, arg1) {
    return __cargo_web_snippet_e9638d6405ab65f78daf4a5af9c9de14ecf1e2ec(takeObject(arg0), arg1);
}

__exports.__wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_01dfb68202885677 = __wbg_cargowebsnippete9638d6405ab65f78daf4a5af9c9de14ecf1e2ec_01dfb68202885677;

function __wbindgen_number_new(i) { return addHeapObject(i); }

__exports.__wbindgen_number_new = __wbindgen_number_new;

function __wbindgen_number_get(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
}

__exports.__wbindgen_number_get = __wbindgen_number_get;

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = cachedTextEncoder.encodeInto(arg, view);
            writeOffset += written;
            if (read === arg.length) {
                break;
            }
            arg = arg.substring(read);
            ptr = wasm.__wbindgen_realloc(ptr, size, size += arg.length * 3);
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}

function __wbindgen_string_get(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
}

__exports.__wbindgen_string_get = __wbindgen_string_get;

function __wbindgen_cb_drop(i) {
    const obj = takeObject(i).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

__exports.__wbindgen_cb_drop = __wbindgen_cb_drop;

const __wbindgen_cb_forget = dropObject;

__exports.__wbindgen_cb_forget = __wbindgen_cb_forget;

function __wbindgen_memory() { return addHeapObject(wasm.memory); }

__exports.__wbindgen_memory = __wbindgen_memory;

function __wbindgen_function_table() { return addHeapObject(wasm.__wbg_function_table); }

__exports.__wbindgen_function_table = __wbindgen_function_table;

function __wbindgen_rethrow(idx) { throw takeObject(idx); }

__exports.__wbindgen_rethrow = __wbindgen_rethrow;

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

__exports.__wbindgen_throw = __wbindgen_throw;

function __wbindgen_closure_wrapper37(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(8);
    const d = wasm.__wbg_function_table.get(9);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            if (--this.cnt === 0) d(a, b);
            else this.a = a;

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

__exports.__wbindgen_closure_wrapper37 = __wbindgen_closure_wrapper37;

function __wbindgen_closure_wrapper1509(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(41);
    const d = wasm.__wbg_function_table.get(42);
    const cb = function(arg0, arg1) {
        this.cnt++;
        try {
            return f(this.a, b, arg0, arg1);

        } finally {
        if (--this.cnt === 0) { d(this.a, b); this.a = 0; }

    }

};
cb.a = a;
cb.cnt = 1;
let real = cb.bind(cb);
real.original = cb;
return addHeapObject(real);
}

__exports.__wbindgen_closure_wrapper1509 = __wbindgen_closure_wrapper1509;

function __wbindgen_closure_wrapper1511(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(39);
    const d = wasm.__wbg_function_table.get(40);
    const cb = function(arg0) {
        this.cnt++;
        try {
            return f(this.a, b, arg0);

        } finally {
        if (--this.cnt === 0) { d(this.a, b); this.a = 0; }

    }

};
cb.a = a;
cb.cnt = 1;
let real = cb.bind(cb);
real.original = cb;
return addHeapObject(real);
}

__exports.__wbindgen_closure_wrapper1511 = __wbindgen_closure_wrapper1511;

function freeWorkPool(ptr) {

    wasm.__wbg_workpool_free(ptr);
}
/**
*/
export class WorkPool {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeWorkPool(ptr);
    }

    /**
    * @returns {}
    */
    constructor() {
        this.ptr = wasm.workpool_createWorker();
    }
}

__exports.WorkPool = WorkPool;

function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

__exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;

function __wbindgen_object_drop_ref(i) { dropObject(i); }

__exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;

function init(module) {
    let result;
    const imports = { './wasm_thread': __exports };
    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        wasm.__wbindgen_start();
        return wasm;
    });
}

export default init;

