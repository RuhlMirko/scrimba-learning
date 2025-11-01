import React from "react"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

export default function Menu({ buttonText = "Menu", items }) {
    const [open, setOpen] = React.useState(false)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <div className="menu">
            <MenuButton
                buttonText={buttonText}
                onClick={toggle}
            />

            {open && <MenuDropdown items={items} />}
        </div>
    )
}
