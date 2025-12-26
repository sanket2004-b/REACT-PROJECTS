import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllow,setnumberAllow]=useState(false)

  const [characterAllow,setcharacterAllow]=useState(false)
  const [Password,Setpassword]=useState("");

  const passwordRef=useRef(null)

  const PasswordGenearator= useCallback(()=>{
      let pass=""
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if(numberAllow){
        str+="0123456789"
      }
      if (characterAllow) str += "!@#$%^&*-_+=[]{}~`"
      for(let i=1;i<length;i++){
        let char= Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
      }
      Setpassword(pass);
  },[length,numberAllow,characterAllow,Setpassword])



  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionLimit(0,100);
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(()=>{
    PasswordGenearator()
  },[length,numberAllow,characterAllow,PasswordGenearator])

  return (
    <>
    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3 text-2xl'>PassWord Generator</h1>

        <div className='flex shadow rounded-lg  overflow-hidden mb-4'>
          <input type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
              />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllow}
                id="numberInput"
                onChange={() => {
                    setnumberAllow((prev) => !prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
              <input
                  type="checkbox"
                  defaultChecked={characterAllow}
                  id="characterInput"
                  onChange={() => {
                      setcharacterAllow((prev) => !prev )
                  }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div> 
    </>
  )
}

export default App
