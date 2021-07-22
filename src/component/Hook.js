import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios';
import { isTSMethodSignature } from '@babel/types';

function Hook() {

    const [count, setcount] = useState();
    const [items, setitems] = useState();
    const [number, setnumber] = useState(1111);

    // useEffect(() => {
    //     fetch("https://api.nasa.gov/planetary/apod\n?api_key=0kCYR4eg6eNLLn1ZlFoVh8SfsyIpJ4sHOQi8iwIJ&date=2020-03-10&hd=true")
    //     .then(response => response.text())
    //     //.then(result => console.log("response >>> "+response))
    //     .then(result => setitems(result))
    //     //.then(console.log("item is >>>"+item))
    //     return () => {
            
    //     }
    // }, [])
console.log(number);
    useEffect(() => {

        setcount(555)
        

        // axios({
        //     method: 'get',
        // url: 'https://api.nasa.gov/planetary/apod\n?api_key=0kCYR4eg6eNLLn1ZlFoVh8SfsyIpJ4sHOQi8iwIJ&date=2020-03-10&hd=true'
        // })
        //     .then(function (response) {
        //         //console.log(JSON.stringify(response.data));
        //         setitems(response.data)
        //         console.log("this is items >>>"+JSON.stringify(items))
        //     })
        //     .catch(function (error) {
        //     console.log(error);
        //     });
        return () => {
            
        }
    }, [])
    

    return (
        <div className="container-fluid">
            <button className="m-5" onClick={()=>setcount(count-1)}>-</button>
            <span className="p-5">{count}</span>
            <button className="m-5" onClick={()=>setcount(count+1)}>+</button>

            <div>
                
            </div>
        </div>
    )
}

export default Hook
