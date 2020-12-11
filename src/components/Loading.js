import React from 'react'
import PropTypes from 'react'

const styles = {
    content: {
        fontSize: '45px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '50px',
        textAlign: 'center',
    }
}

export default class Loading extends React.Component {

    state = {
        content: this.props.text
    }


    componentDidMount() {
        const { text, speed } = this.props

        this.interval = window.setInterval(() => {
            this.state.content === 'Loading' + '...'
                ? this.setState({content: text})
                : this.setState(({content}) => ({
                     content: content + '.'
                }))
        }, speed)
    }

    componentWillUnmount() {
        window.clearInterval(this.interval)
    }

    render() {

        return (
            <p style={styles.content}>
                {this.state.content}
            </p>
        );
    }
}

