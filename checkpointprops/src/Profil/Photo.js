import React from 'react'
import FullName from './fullName'

function Photo({ arr }) {
    return (
        <img className="avatar" src={arr} alt="jhon-doe" />
    )
}
export default Photo