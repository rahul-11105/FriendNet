import context from "./UserContext";

import React from 'react'

export default function UserState() {
  return (
   <>
   <context.Provider value={n}>
    {props.children}
   </context.Provider>
   </>
  )
}
