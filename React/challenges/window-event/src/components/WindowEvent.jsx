import React from 'react'
import { useEffect } from 'react'
export default function WindowEvent () {
    useEffect(() => {
      const doubleClick = () => alert("moused pressed");

      window.addEventListener("dblclick", doubleClick);

      return () => window.removeEventListener("dblclick", doubleClick);
    }, [])
    


    return (
      <h2>Window event active</h2>
    )
  }