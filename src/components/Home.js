import React from 'react'

function Home({myFunc}) {
    return (
        <div>
            <h1>Current : Home page</h1>
            <div>
                <br></br>
                <p>
                    {process.env.NODE_ENV}
                </p>
            </div>
            <button type="button" onClick={myFunc}>Add to basket</button>
        </div>
    )
}

export default Home
