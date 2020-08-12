import React from 'react'

function About() {
    return (
        <div>
            <h1>Current Page : About Page</h1>
            <br></br>
            <p>
                {process.env.NODE_ENV}
            </p>
        </div>
    )
}

export default About
