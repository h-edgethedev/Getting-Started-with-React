import { useState } from "react";

export function ColorPicker() {
    const [color, setColor] = useState("#ffffff")
    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return (
        <>
            <div id="color-picker-container" style={{ backgroundColor: color }}>
                <input type="color" name="" id="color-input" value={color} onChange={handleColorChange} />
            </div>
        </>
    )
}

export default ColorPicker;