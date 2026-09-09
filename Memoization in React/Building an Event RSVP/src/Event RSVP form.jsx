import { useState, useEffect } from "react";

export function EventRSVPForm() {
    const 
    return (
        <>
            <form>
                <label htmlFor="username">
                    Name: <input type="text" name="username" id="username" required placeholder="Your Name"/>
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" required placeholder="Your Email"/>
                </label>
                <label htmlFor="Num-of-attends">Number of Attendees
                    <input type="number" name="Num-of-attends" id="NumofGuest" placeholder="Number of Attendees"/>
                </label>
                <label htmlFor="Diet-pref">Dietary Preferences: 
                    <input type="text" name="Diet-pref" id="Diet-pref" placeholder="Dietary Preferences (optional)"/>
                </label>
                <label htmlFor="checkbox">Brining additional guests?
                    <input type="checkbox" name="checkbox" id="checkbox" />
                </label>

            </form>
        </>
    )
}
