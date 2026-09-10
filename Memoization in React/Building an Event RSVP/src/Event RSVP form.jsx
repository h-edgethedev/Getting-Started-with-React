import { useState, useEffect } from "react";
import sendOTP from "./server/SMTP.js"

export function EventRSVPForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [numAttendants, setNumAttendants] = useState("")
    const [diet, setDiet] = useState("")
    const [additionalGuests, setAdditionalGuests] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [otp, setOtp] = useState("")
    const [otpInput, setOtpInput] = useState("")
    const [isVerified, setIsVerified] = useState("")
    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handleAttendantsChange(e) {
        setNumAttendants(Number(e.target.value))
    }
    function handleDietChange(e) {
        setDiet(e.target.value)
    }
    function handleAdditionalGuests(e) {
        setAdditionalGuests(e.target.checked)
    }
    function generateOTP() {
        let randint = Math.floor(100000 + Math.random() * 900000)
        return randint;
    }

    async function submitEventListener(Event) {
        Event.preventDefault()

        let generatedOtp = generateOTP()
        setOtp(generatedOtp)
        const sent = await sendOTP(email, generatedOtp)
        if (sent) {
            setSubmitted(true)
        }
    }

    function handleOtpChange(e) {
        setOtpInput(e.target.value)
        const value = e.target.value
        if (value.length === 6) {
            if (otp === Number(value)) {
                setIsVerified(true)
            }
            else {
                setIsVerified(false)
            }
        }
        else {
            setIsVerified("")
        }
    }
    return (
        <div className="rsvp-page">
            <form className="rsvp-form" onSubmit={submitEventListener}>
                <div className="form-header">
                    <p className="eyebrow">Event RSVP</p>
                    <h2>Reserve your spot</h2>
                </div>

                <label className="field-group" htmlFor="username">
                    <span>Name</span>
                    <input className="field-input" type="text" name="username" id="username" required placeholder="Your Name" value={name} onChange={handleNameChange} />
                </label>

                <label className="field-group" htmlFor="email">
                    <span>Email</span>
                    <input className="field-input" type="email" name="email" id="email" required placeholder="Your Email" onChange={handleEmailChange} value={email} />
                </label>

                <label className="field-group" htmlFor="Num-of-attends">
                    <span>Number of Attendees</span>
                    <input className="field-input" type="number" name="Num-of-attends" min={1} required id="NumofGuest" onChange={handleAttendantsChange} placeholder="Number of Attendees" value={numAttendants} />
                </label>

                <label className="field-group" htmlFor="Diet-pref">
                    <span>Dietary Preferences</span>
                    <input className="field-input" type="text" name="Diet-pref" id="Diet-pref" placeholder="Dietary Preferences (optional)" value={diet} onChange={handleDietChange} />
                </label>

                <label className="checkbox-row" htmlFor="checkbox">
                    <input type="checkbox" name="checkbox" id="checkbox" checked={additionalGuests} onChange={handleAdditionalGuests} />
                    <span>Bringing additional guests?</span>
                </label>

                <button className="submit-btn" type="submit">Submit RSVP</button>

                {submitted &&
                    <div className="success-panel">
                        <h3>RSVP Submitted!</h3>
                        <div className="summary-list">
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Attendees:</strong> {numAttendants}</p>
                            <p><strong>Diet:</strong> {diet || "None specified"}</p>
                            <p><strong>Bringing others:</strong> {additionalGuests ? "Yes" : "No"}</p>
                        </div>
                        <p className="otp-note">An OTP was sent to {email}. Kindly input it below.</p>
                        <label className="field-group otp-group" htmlFor="otp-input">
                            <span>Verify OTP</span>
                            <input className="field-input" type="text" value={otpInput} onChange={handleOtpChange} maxLength={6} />
                        </label>
                        {
                            isVerified && (
                                <p style={{ color: "green" }}>OTP verified! Have a nice day.</p>
                            )
                        }
                        {
                            isVerified == false && otpInput.length == 6 && (
                                <p style={{ color: "red" }}>Incorrect OTP</p>
                            )
                        }
                    </div>
                }
            </form>
        </div>
    )
}
