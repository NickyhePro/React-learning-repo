import * as React from 'react';

const input = (props: any) => {
    return (
        <div>
            Type something!
            <br/>
            <input type="text" onChange={props.changed}/>
            <p>Length of input: {props.length}</p>
        </div>
    )
}

export default input;