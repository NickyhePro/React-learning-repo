import * as React from 'react';
import './CharComponent.css'

const charsequence = (props: any) => {

    return (
        <li className="Char" onClick={props.click}>
            {props.char}
        </li>
    )
}

export default charsequence;