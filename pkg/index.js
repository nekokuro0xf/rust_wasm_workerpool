import * as wasm_bindgen from "./wasm_thread_bg";
import {default as init} from './wasm_thread.js'

const { WorkPool } = wasm_bindgen

console.log(wasm_bindgen)

init('./wasm_thread_bg.wasm').then((wasm)=>{
  console.log(wasm,WorkPool)
  wasm.workpool_createWorker()
})



