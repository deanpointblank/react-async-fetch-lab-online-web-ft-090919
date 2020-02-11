// create your App component here
import React, { Component } from 'react'

class App extends Component{

    constructor(){
        super();
        this.state = {
            people: []
        }
    }
     


    render(){
        return(
            <ul>
                {this.state.people.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
                people: data.people
            })
        })
    }
}


export default App