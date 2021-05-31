// create your App component here

import React from "react";

export default class App extends React.Component {


    // Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json (Links to an external site.), a free API that returns a list of people currently in space.
    render(){
        return(
            <div>
                People are in space
            </div>
        )
        
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json)
        .then(data => console.log(data))
    }

}
