#[macro_use]
extern crate stdweb;

use wasm_bindgen::prelude::*;
// use js_sys::Array;
use web_sys::{ Event, Worker };
use stdweb::private::wasm_bindgen::JsCast;
use std::sync::{Arc, Mutex};

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    let message = "Hello, 世界!";
    js! {
        // alert( @{message} );
        console.log(@{message})
    }
    Ok(())
}

#[wasm_bindgen]
pub fn fuck(){
    let fuck = "shit";
    js! {
        console.log( @{fuck})
    }
}

#[wasm_bindgen]
pub struct WorkPool {
    workers:Vec<Worker>,
    callback:Closure<dyn FnMut(Event) -> Result<(), JsValue>>,
}

#[wasm_bindgen]
impl WorkPool{
    #[wasm_bindgen(constructor)]
    pub fn createWorker() -> Result<WorkPool, JsValue>{
        let callback = Closure::wrap(Box::new(|event: Event| {
            let message = "Hello, callback!";
            js!{
                console.log("callbck",@{message})
            }
            Ok(())
        }) as Box<dyn FnMut(Event) -> Result<(), JsValue>>);

        let mut workers = Vec::new();

        let worker = Worker::new("./worker.js")?;

        let ptr_to_send = Arc::into_raw( Arc::new(Mutex::new(vec![0; 4 * 1024]))) as u32;
        let ptr_to_send2 = JsValue::from(ptr_to_send);

        js!{
            console.log(@{ptr_to_send})
        }


        worker.post_message(&ptr_to_send2)?;
        worker.set_onmessage(Some(callback.as_ref().unchecked_ref()));
        worker.set_onerror(Some(callback.as_ref().unchecked_ref()));
        workers.push(worker);

        Ok(WorkPool { workers, callback })
    }
}