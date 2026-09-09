import { useState, useEffect } from "react";

export function EventRSVPForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [numAttendants, setNumAttendants] = useState(0)
    const [diet, setDiet] = useState("")
    const [additionalGuests, setAdditionalGuests] = useState(false)
    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleEmailChange(e){
        setEmail(e.target.value)
    }
    function handleAttendantsChange(e){
        setNumAttendants(e.target.value)
    }
    function handleDietChange(e){
        setDiet(e.target.value)
    }
    function handleAdditionalGuests(e){
        setAdditionalGuests(e.target.value)
    }
    return (
        <div>
            <form>
                <label htmlFor="username">
                    Name: <input type="text" name="username" id="username" required placeholder="Your Name" value={name} onChange={handleNameChange}/>
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" required placeholder="Your Email" value={email}/>
                </label>
                <label htmlFor="Num-of-attends">Number of Attendees
                    <input type="number" name="Num-of-attends" id="NumofGuest" placeholder="Number of Attendees" value={numAttendants}/>
                </label>
                <label htmlFor="Diet-pref">Dietary Preferences:
                    <input type="text" name="Diet-pref" id="Diet-pref" placeholder="Dietary Preferences (optional)" value={diet}/>
                </label>
                <label htmlFor="checkbox">Bringing additional guests?
                    <input type="checkbox" name="checkbox" id="checkbox" value={additionalGuests} onChange={handleAdditionalGuests}/>
                </label>
            </form>
        </div>
    )
}
