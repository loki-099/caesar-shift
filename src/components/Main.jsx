import React, { useState, useEffect } from 'react'

const Main = () => {
  const [inputText, setInputText] = useState('')
  const [key, setKey] = useState(1)
  const [outputText, setOutputText] = useState('')
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const handleEncrypt = () => {
    let result = ""
    for (let inputLetter of inputText) {
      for (let alphaInd = 0 ; alphaInd < alphabet.length ; alphaInd++) {
        if (inputLetter == alphabet[alphaInd]) {
          result += alphabet[(alphaInd + key) % alphabet.length]
        }
      }
    }
    setOutputText(result)    
  }

  const handleDecrypt = () => {
    let result = ""
    for (let inputLetter of inputText) {
      for (let alphaInd = 0 ; alphaInd < alphabet.length ; alphaInd++) {
        if (inputLetter == alphabet[alphaInd]) {
          result += alphabet[(alphaInd - key + alphabet.length) % alphabet.length]
        }
      }
    }
    setOutputText(result.toLocaleUpperCase())    
  }


  return (
    <div className='w-full h-screen md:w-[400px] md:h-[600px] bg-black/10 md:bg-black/10 rounded-none md:rounded-xl overflow-hidden shadow-[0_0px_36px_2px] shadow-white'>
      <div className='w-full h-full backdrop-blur-md p-6'>
        <h1 className='text-white uppercase font-bold text-xl text-center'>Caesar Shift Cipher</h1>
        {/* INPUT TEXT */}
        <textarea 
          type="text" 
          className='w-full bg-gray-500/40 text-white px-3 py-2 outline-none border-2 border-white break-words resize-none mt-4' placeholder='Input text...'
          rows={4}
          value={inputText}
          onChange={(event) => (setInputText(event.target.value.toUpperCase()))}/>
        {/* KEY INPUT */}
        <div className='flex gap-2 items-center justify-center mt-4'>
          <label htmlFor="key" className='text-white'>Key:</label>
          <input 
            type="number" 
            id="key"
            value={key}
            onChange={(event) => (setKey(parseInt(event.target.value)))} 
            className='w-[70px] bg-gray-500/40 text-white px-1 outline-none border-2 border-white' />
        </div>
        {/* OUTPUT TEXT */}
        <textarea 
          type="text" 
          className='w-full bg-gray-500/40 text-white px-3 py-2 outline-none border-2 border-white break-words resize-none mt-6' placeholder='Output text...'
          rows={4} disabled 
          value={outputText}/>
        <div className='flex items-center justify-end gap-2 mt-3'>
          <button className='text-white bg-black/80 border-2 border-white p-2' onClick={handleEncrypt}>Encrypt</button>
          <button className='text-white bg-black/80 border-2 border-white p-2' onClick={handleDecrypt}>Decrypt</button>
        </div>
      </div>
    </div>
  )
}

export default Main