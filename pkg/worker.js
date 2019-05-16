// importScripts('wasm_thread.js')

console.log("一个新的Worker")
self.addEventListener('message',function (e){
  console.log("worker message",e);
  // wasm_bindgen.fuck();
  console.log('postMessage', postMessage("fuck from worker"))
})