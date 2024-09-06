import React, { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import useStore from '../stores/useStore'

export default function ListToDo() {
  const {toDoList,addToDoList,editToDoList,delToDoList} = useStore(useShallow((state)=>({
    toDoList : state.toDoList,
    addToDoList : state.addToDoList,
    editToDoList : state.editToDoList,
    delToDoList : state.delToDoList
  })))
  const [allInput,setAllInput] = useState({
     inputText : [''],
     isEdit : [],
  });




  const handleChange = (e,inx) =>{
    const newArr = [...allInput.inputText]
    newArr[inx]= e.target.value
    setAllInput({...allInput,inputText : newArr})
  }


  const handleEdit =(inx)=>{
    const newArr = [...allInput.isEdit]
    if(allInput.isEdit[inx]){ 
      editToDoList(allInput.inputText[inx+1],inx)
    }
    newArr[inx] = !allInput.isEdit[inx]
    setAllInput({...allInput,isEdit : newArr})
  }


  const handleAdd =()=>{
    if(allInput.inputText[0]){
      addToDoList(allInput.inputText[0])
      setAllInput({...allInput,
        inputText :['',...toDoList.map(el=>el.data)],
        isEdit : [...allInput.isEdit,false]
      })
    }
  }


  return (
    
    <div className='flex flex-col justify-start items-center mt-40'>
      <div className='flex flex-col justify-start items-center gap-4 px-8 py-4 border-8 border-violet-400 rounded-3xl w-1/2 bg-slate-200'>
        <h1 className='text-3xl font-bold text-cyan-800'>To do list</h1>
        <div className='flex justify-between gap-2 w-full'>
          <input type='text' value={allInput.inputText[0]} maxLength={80} onChange={(e)=>handleChange(e,'0')}
            className='border border-black rounded-md p-2 w-3/4'
            />
          <button className='bg-green-200 py-2 px-8 rounded-md flex-grow'
            onClick={handleAdd}
            >Add</button>
        </div>
        {toDoList.map((el,inx)=><li key={el.id} className='flex gap-2 w-full'>
              {allInput.isEdit[inx]?
                  <input className='list-none p-2 w-3/4 border-4 border-pink-400 rounded-xl text-xl'
                          type='text' maxLength={80} defaultValue={el.data} onChange={(e)=>handleChange(e,inx+1)} />
                  :<p className='list-none p-2 w-3/4 border-4 border-pink-400 rounded-xl bg-yellow-100 text-xl'>{el.data}</p>}

              <button className='flex-grow bg-yellow-200 rounded-xl'
                  onClick={()=>handleEdit(inx)}
                  ><img className='w-5 m-auto'src="src/assets/edit.svg" alt="edit"/></button>
              <button className='flex-grow bg-red-500 rounded-xl'
                  onClick={()=>delToDoList(el.id)}
                  ><img className='w-5 m-auto' src="src/assets/bin.svg" alt="bin"/></button>
        </li>
        )}
        <div className='mb-8'></div>
      </div>

    </div>
  )
}
