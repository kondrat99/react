import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            lastname: '',
            Email: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, lastname, Email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                <label for="lastname">lastName</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname"
                    value={lastname} 
                    onChange={this.handleChange} />    
                <label for="Email">Email</label>
                <input 
                    type="text" 
                    name="Email" 
                    id="Email"
                    value={Email} 
                    onChange={this.handleChange} />
                <button type="Add User">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;