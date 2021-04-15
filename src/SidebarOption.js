import React from 'react';
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
    return (
        // If it is active then by default, i will hide the p tag
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
