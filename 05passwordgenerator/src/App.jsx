import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] =useState(false)
  const[charAllowed,setcharAllowed] = useState(false)
  const[password,setpasswword] =useState("")

  //useRef hook
  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#~$%^&*()_+"

    for (let i = 0; i < length; i++) {
      let char =  Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setpasswword(pass)

  } ,[length,numberAllowed,charAllowed,setpasswword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
  
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  text-green-500 text-2xl'>
  <h1 className=' text-center text-white my-3 text-2xl'>Password Generator</h1>
  <div className=' bg-white flex shadow rounded-lg overflow-hidden mb-4 text-black'>
    <input  
    type="text"
    value={password}
    className='outline-none w-full py-1 px 3'
    placeholder='Password'
    readOnly
    ref ={passwordRef}
    />
    <button onClick={copyPasswordToClipboard}
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    
    <button
       onClick={()=>{
        passwordGenerator((prev)=> !prev)}} 
    className='bg-green-500 text-white px-3 py-1 rounded-lg text-center ml-24'>
      Generate Password</button>

    <div className='flex text-sm-160 gap-x-2'>
      <div className=' flex items-center gap-x-38'>
        <input
         type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}       
        />
        <label>Length:{length}</label>
      </div>
    </div>
    <div className='flex text-sm-160 gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
       defaultChecked={numberAllowed}
       id="numberInput"
        onChange={()=>{
          setnumberAllowed((prev)=> !prev)}}       
        />
     <label htmlFor="numberinput">Numbers</label>
      </div>
    </div>
    <div className='flex text-sm-160 gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
         type="checkbox"
       defaultChecked={charAllowed}
       id="characterInput"
        onChange={()=>{
          setcharAllowed((prev)=> !prev)}}       
        />
     <label htmlFor="characterInput">Character</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
