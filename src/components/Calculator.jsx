import React, { useState } from 'react'

function Calculator() {
    const [result, setResult] = useState('');

    const clickHandle = (e) => {
        setResult(result.concat(e.target.value));
    }

    const clearScreen = () => {
        setResult("");
    }

    const calculate = () => {
        setResult(eval(result).toString());
    }

  return (
    <div className='bg-gray-800 text-white w-screen h-screen flex justify-center items-center'>
        <div className="w-64 h-auto bg-orange-300 rounded-2xl shadow-xl border-4 border-gray-100">
            
            {/* Screen */}
            <div className="screen p-1">
                <input type="text" value={result} className=' shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-100 text-2xl pt-10 w-full text-black' 
                placeholder='0' />
            </div>

            {/* Brand */}
            <div className="brand bg-gray-00 bg-opacity-90 ">
                <h1 className='bg-orange-300 text-gray-900 text-xs font-bold text-center'>Calculus</h1>
            </div>

            <div className="keyword">
                <div className="m-2 flex justify-between">
                    <input type="button" onClick={clearScreen} value="C" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="(" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value=")" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="/" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={clickHandle} value="7" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="8" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="9" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="*" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={clickHandle} value="4" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="5" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="6" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="-" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={clickHandle} value="1" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="2" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="3" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="+" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                </div>

                <div className="flex justify-between m-2">
                    <input type="button" onClick={clickHandle} value="." className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="0" className=' bg-sky-500 shadow-md rounded-lg w-12 h-12 text-center text-white font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={clickHandle} value="%" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                    <input type="button" onClick={calculate} value="=" className=' bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator;