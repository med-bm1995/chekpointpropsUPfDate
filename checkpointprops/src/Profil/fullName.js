import React from 'react'
import Photo from './Photo'
import img from './2.jpg'

function FullName(props) {
    const arr = './2.png'

    return (
        <div>
            <section id="about-me">
                <h1 onClick={() => props.handleAlert(props.name)}>{props.hello}

                    <span className="rotate text-important">{props.name}</span> ,<br />
                    {props.text}    </h1>


                <Photo arr />
            </section>
        </div>
    )
    {/*  FullName.defaultProps = {
        hello: 'hi'
    };
    FullName.PropTypes = {
        hello: PropTypes.string
    } */}


}
export default FullName