import * as React from 'react'; 
import './UserInput.css';

const userInput = (props: any) => {
    return (
        <div className="UserInput">
            Say someting to me
            <input type="text" onChange={props.onChange} value={ props.content }/>
        </div>
    )
}

export default userInput;