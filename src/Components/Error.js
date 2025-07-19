import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>

            <h1>Error Has Been Occured</h1>
            <h2>Oops.....</h2>
        </div>
    )
}

export default Error
