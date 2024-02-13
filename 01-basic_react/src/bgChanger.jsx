import { useState } from "react"


export function Button({colorName = "White", color = "black", backgroundColor = "black", onClick}){
  return (
    <button onClick={onClick} className="px-5 font-medium font-mono py-2 border border-black rounded-lg m-1" style={{backgroundColor: backgroundColor, color: color}}>{colorName}</button>
    )
  }
  
  export default function BgChanger(){
    
  const [color, setColor] = useState("White");
  
  return (
    <>
      <article style={{backgroundColor: color}} className="h-screen w-screen flex justify-center items-center flex-wrap gap-1">
        <Button onClick={()=>setColor("White")} colorName="White" color="black" backgroundColor="White" />
        <Button onClick={()=>setColor("red")} colorName="red" color="red" backgroundColor="White" />
        <Button onClick={()=>setColor("blue")} colorName="blue" color="blue" backgroundColor="White" />
        <Button onClick={()=>setColor("green")} colorName="green" color="green" backgroundColor="White" />
        <Button onClick={()=>setColor("purple")} colorName="purple" color="purple" backgroundColor="White" />
      </article>
    </>
  )
}


