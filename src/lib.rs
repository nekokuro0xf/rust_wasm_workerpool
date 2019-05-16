#[macro_use]
extern crate stdweb;

use wasm_bindgen::prelude::*;
use js_sys::Array;
use web_sys::{ MessageEvent,  Worker };
use stdweb::private::wasm_bindgen::JsCast;
use stdweb::private::wasm_bindgen::JsValue;
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
    callback:Closure<dyn FnMut(MessageEvent) -> Result<(), JsValue>>,
}

#[wasm_bindgen]
impl WorkPool{
    #[wasm_bindgen(constructor)]
    pub fn createWorker() -> Result<WorkPool, JsValue>{
        let callback = Closure::wrap(Box::new(|event: MessageEvent| {
            // let Some(msg) = event.dyn_ref::<MessageEvent>();
            let data = event.data();
            let array = Array::from(&data);
                
            // shift / pop 出来的是JsValue
            let a = array.shift();
            let a = a.as_string();
            let b = array.shift().as_f64();
            let c = array.shift().as_f64();
            // let d = array.shift();
            js!{
                console.log("callback get Data", @{a},@{b},@{c})
            }

            let message = "Hello, callback!";
            js!{
                console.log("callbck",@{message})
            }
            Ok(())
        }) as Box<dyn FnMut(MessageEvent) -> Result<(), JsValue>>);

        let mut workers = Vec::new();

        let worker = Worker::new("./worker.js")?;

    
        let send2 = Array::new();
        send2.push([2,3,4,5]);
        send.push("fuck");


        js!{
            console.log(@{send2.index()})
        }


        worker.post_message(&send2)?;
        worker.set_onmessage(Some(callback.as_ref().unchecked_ref()));
        worker.set_onerror(Some(callback.as_ref().unchecked_ref()));
        workers.push(worker);

        Ok(WorkPool { workers, callback })
    }
}