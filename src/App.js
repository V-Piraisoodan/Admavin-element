import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const data = useMemo(()=> {
    return [ "one","two","three"] 
  },[]) 


  const [Data,setData] = useState()

  
  useEffect (()=>{
      setData(data) 
  },[])
 
  
const [buck2 , setBuck2] = useState([])
const [id,setId] = useState([])
const [val,setval] = useState([])


  function handleChange(event){
    const val = event.target.value
    const checked = event.target.checked
    let id = (event.target.id-1)

    if(checked){
      setval((e)=>[...e,val])
    }
    else{
      setval(e =>{
        return [...e.filter(s => s!==val)]
      })
    }
    setId(id)
  }


  function Add(){
    setBuck2(val)   
 console.log(val,Data)
  }
 console.log(Data)
  if(Data !==undefined){
    var rawData = Data.map((e,index)=><div key={index} first={index} onClick={handleChange}><input type="checkbox" id={index} value={e}></input>{e}</div>)
  }
  var bucket2 = buck2.map((e,index)=><div key={index} buck2={index} ><input type="checkbox" id={index} value={e}></input>{e}</div>)

  return (
    <div className='container'>
      <div className='tittle'>Element Transfer</div>
      <div className='bucket'>
        <div className='bucket1'><div className='heading'>Bucket1</div>{rawData}</div>
        <div className='btn'>
          <button className='add' onClick={Add}>Add</button>
          <button className='remove' >Remove</button>
          <button className='addall' >Add all</button>
          <button className='removeall' >Remove all</button>
        </div>
        <div className='bucket2'><div className='heading'>Bucket2</div>{bucket2}</div>
      </div>
    </div>
  )
}

export default App