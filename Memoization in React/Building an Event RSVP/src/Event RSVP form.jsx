import { useState, useEffect } from "react";

export function EventRSVPForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [numAttendants, setNumAttendants] = useState(null)
    const [diet, setDiet] = useState("")
    const [additionalGuests, setAdditionalGuests] = useState(false)
    const [submitted, setSubmitted] = useState(false)
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
    function submitEventListener(Event) {
        Event.preventDefault()
        setSubmitted(true)
    }
    return (
        <div>
            <form onSubmit={submitEventListener}>
                <label htmlFor="username">
                    Name: <input type="text" name="username" id="username" required placeholder="Your Name" value={name} onChange={handleNameChange} />
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" required placeholder="Your Email" onChange={handleEmailChange} value={email} />
                </label>
                <label htmlFor="Num-of-attends">Number of Attendees
                    <input type="number" name="Num-of-attends" min={1} required id="NumofGuest" onChange={handleAttendantsChange} placeholder="Number of Attendees" value={numAttendants} />
                </label>
                <label htmlFor="Diet-pref">Dietary Preferences:
                    <input type="text" name="Diet-pref" id="Diet-pref" placeholder="Dietary Preferences (optional)" value={diet} onChange={handleDietChange} />
                </label>
                <label htmlFor="checkbox">Bringing additional guests?
                    <input type="checkbox" name="checkbox" id="checkbox" checked={additionalGuests} onChange={handleAdditionalGuests} />
                </label>
                <button type="submit">Submit RSVP</button>
                {submitted &&
                    <div>
                        <h1>RSVP Submitted!</h1>
                        <p><strong>Name: </strong>{name} </p>
                        <p><strong>Email: </strong>{email} </p>
                        <p><strong>Number of Attendees: </strong>{numAttendants} </p>
                        <p><strong>Dietary Preferences</strong>{diet} </p>
                        <p><strong>Bringing Others: </strong>{additionalGuests ? "Yes" : "No"} </p>
                    </div>
                }
            </form>
        </div>
    )
}
