import * as React from 'react'; 
import './UserOutput.css';

const userOutput = (props: any) => {
    return (
        <div className="UserOutput">
            <p>This is my first assignment for React!</p>
            <p>{props.content}</p>
        </div>
    )
}

export default userOutput;