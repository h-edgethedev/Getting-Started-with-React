import { useState } from "react";

export function ColorPicker() {
    const [color, setColor] = useState("#ffffff")
    return (
        <>
            <div id="color-picker-container"></div>
        </>
    )
}