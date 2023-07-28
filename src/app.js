import React, { useEffect, useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [result, setResult] = useState(false)

  // CHECKS
  // 1. CHARACTER COUNT SHOULD BE GREATER THAN 3

  // const checkPalindrome = (_text) => {
  //   var _result = {
  //     count: _text.toString().split('').length,
  //     oddEven: _text.toString().split('').length % 2 != 0 ? 'odd' : 'even'
  //   }
  //   setResult(_result)
  //   console.log(_text.toString().split('').length % 2)
  // }

  const handleChange = (e) => {
    var value = e.target.value.toString()
    var reversed = value.split('').reverse().join('')

    setCount(value.length)
    setText(value)
    console.log(`text: ${value}, reversed: ${reversed}`)
    setResult(value === reversed)
  }

  useEffect(()=>{
    console.count("RENDER COUNT")
  }, [])

  return (
    <>
      <div className="container w-96 bg-slate-200 rounded-lg mx-auto mt-48 p-5">
        <p className="font-serif text-2xl text-center">Palindrome Checker</p>
        <input 
          className='border border-blue-600 rounded-md text-md mt-5 w-full' 
          type="text" 
          id="palindrome-raw" 
          onChange={ handleChange } 
        />
        <p className="font-mono text-md mt-5">{count >= 3 ? "✅ 3 characters and above" : "❌ 3 characters and above"}</p>
        { count >= 3 && <p className="font-mono text-md">{result ? "✅ is a palindrome" : "❌ is a palindrome"}</p> }
      </div>
      <div className="container w-96 mx-auto p-5">
        <p className="font-mono text-md text-white mt-8">Technologies used in this project:</p>
        <ul className='list-disc mt-3'>
          <li className='font-mono text-md text-white'>NodeJS</li>
          <li className='font-mono text-md text-white'>ReactJS</li>
          <li className='font-mono text-md text-white'>Tailwind CSS</li>
          <li className='font-mono text-md text-white'>Babel</li>
          <li className='font-mono text-md text-white'>Webpack</li>
        </ul>
      </div>
    </>
  )
}
