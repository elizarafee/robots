import React from 'react'

const Robotssearchboxcomponent = ( {searchFieldChange} ) => {
    return (
        <>
        <div>
            <input className="pa2 ba b--green bg-lightest-blue" type='search' placeholder='Search Robots' onChange={searchFieldChange} />
        </div>
        </>
    )
}

export default Robotssearchboxcomponent;