import React from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const userStore = (set) => ({
  userID : 0,
  username : '',
  firstName : '',
  lastName : '',
  image : '',
  toDoList : [],
  addToDoList :(newList)=>set((state)=>({toDoList : [...state.toDoList,{id:(state.toDoList.length >0?state.toDoList.pop().id+1:1),data:newList}]})),
  editToDoList : (editText,inx)=>set((state)=>{
      const editArr = [...state.toDoList]
      editArr[inx].data = editText
      return {toDoList: editArr}
    }),
  delToDoList : (id)=>set((state)=>({toDoList :state.toDoList.filter((el)=>el.id!==id)}))
})

const usePersist={
  userID : 0,
  username : '',
  firstName : '',
  lastName : '',
  image : '',
  toDoList : [],
}


const useStore = create(persist(userStore,usePersist));
export default useStore