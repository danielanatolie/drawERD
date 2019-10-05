import React, { Component } from 'react';
export default class Output extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''}
    }

    render() {
        return (
            <div class="mermaid">
                graph TD
                AA[Rental] 		
                a1((Name)) 		
                a2((id)) 		
                AA --- a1
                AA --- a2		
                BB[Tenant]		
                b1((name))
                b2((phone))
                BB --- b1
                BB --- b2
                CC{has}	
                AA --> CC	
                CC --> BB
            </div>
        )
    }

}