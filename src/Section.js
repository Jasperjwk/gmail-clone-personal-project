import React from 'react'
import "./Section.css";

function Section({ Icon, title, color, selected}) {
    return (
        // If it is selected, i am gonna apply css
        <div 
        className={`section ${selected && "section--selected"}`}
            style={{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`,
            }}
        >
            <Icon/>
            <h4>{title}</h4>
        </div>
        
    )
}

export default Section
