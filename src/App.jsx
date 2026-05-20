import Header from "./components/Header.jsx"
import {useState,useEffect,useRef} from"react"
export default function App(){
    const [isDark,setMode] = useState(false)
    useEffect(()=>{
        const root = document.getElementById("root")
        root.classList.toggle("dark",isDark)
    },[isDark])
    return(
        <>
        <Header setMode={setMode} isDark={isDark}/>
        </>
    )
}