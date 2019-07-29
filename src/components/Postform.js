import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createPosts } from '../actions/postAction';


class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

       this.props.createPosts(post);

    }
    render() {
        return (
            <div style= {style}>
                <h2>Add Post</h2>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input style={stylefield} onChange = {this.onChange} value = {this.state.title} name="title" type="text"></input>
                    </div>
                    <br></br>
                    <div>
                        <label>Body:</label><br />
                        <textarea style={stylefield} onChange = {this.onChange} value = {this.state.body} name="body"/>
                    </div>
                    <br></br>
                    <button  style = {buttonstyle} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


const style = {
    margin: '0 2%'
}

const buttonstyle = {
    background: '#61dafb',
    border: 'none',
    whiteSpace: 'nowrap',
    padding: '1%',

}
const stylefield = {
    backgroundColor: 'rgb(236, 236, 236)',
}
Postform.propTypes = {
    createPosts: PropTypes.func.isRequired
};

export default connect(null, { createPosts })(Postform);