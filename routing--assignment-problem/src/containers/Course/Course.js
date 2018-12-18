import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: ""
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }

    componentDidMount() {
        const array = [1,2,3]
        for (let a of array) {
            console.log(a)
        }
        console.log(this.props.location.search);
        
        const query = new URLSearchParams(this.props.location.search);

        console.log(query.entries());
        
        for (let param of query.entries()){
             console.log(param[0] + param[1]); 
            this.setState({
                title: param[1]
            })   
        }
        
        
    }
}

export default Course;