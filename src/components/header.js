import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
            <div style={style}>
                <h1>Postboard with React/Redux</h1>
            </div>
        )
    }
}

const style = {
    background: '#20232a',
    color: '#61dafb',
    margin: 'auto',
    textAlign: 'center',
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
}
export default Header;