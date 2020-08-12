import React from 'react'

function Cart() {
    return (
        <div>
            <h1>Current Page : Cart</h1>
            <br></br>
            <p>
                {process.env.NODE_ENV}
            </p>
        </div>
    )
}

export default Cart