import { useState, useEffect, useRef } from "react"

export const OTPGenerator = () => {
    const [otp, setOtp] = useState("null")
    const intervalId = useRef(null)
    const [secondsLeft, setSecondsLeft] = useState(null)
    const [isCounting, setIsCounting] = useState(false)
    const [hasGenerated, setHasGenerated] = useState(false)
    function generateOTP(){
        return Math.floor(Math.random()*1000000)
    }
    let timer;
    function buttonHandler(){
        setOtp(generateOTP());
        setSecondsLeft(5)
        setHasGenerated(true)
        setIsCounting(true)
        intervalId.current = setInterval(()=>{
            setSecondsLeft(prevSeconds => prevSeconds-1)
        }, 1000)
    }
    useEffect(()=>{
        if(secondsLeft===0){
            clearInterval(intervalId.current)
            setIsCounting(false)
        }
    }, [secondsLeft])
    useEffect(()=>{
        clearInterval(intervalId.current)
    }, [])
    return(
        <div className="container">
            <h1 id="otp-title">OTP Generator</h1>
            <h2 id="otp-display">{hasGenerated ? `${otp}`: `Click "Generate OTP" to get a code`}</h2>
            <p id="otp-timer" aria-live="assertive">{isCounting ? `Expires in: ${secondsLeft} seconds`: hasGenerated ? "OTP expired. Click the button to generate a new OTP.": ""}</p>
            <button id="generate-otp-button" onClick={buttonHandler} disabled={isCounting}>Generate OTP</button>
        </div>   
    )
}