import * as React from 'react';

const validation = (props: any) => {

    let info = null;

    if(props.length > 5) {
        info = (
            <p>Text long enough.</p>
        )
    }else{
        info = (
            <p>Text too short!</p>
        )
    }
    return (
        <div>
            {info}
        </div>
    )
}

export default validation;