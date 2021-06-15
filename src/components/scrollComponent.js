import React from 'react'

const Scrollcomponent = (props) => {
    return (
        <>
            <div className="mt3" style={{overflowY: 'scroll', border: '5px solid black', height: '700px'}}>
                {props.children}
            </div>
        </>
    )
}

export default Scrollcomponent;