import React from 'react'
import queryString from 'query-string'
import { ThemeConsumer } from "../contexts/theme";
import { fetchUser, fetchPosts } from "../utils/API";


export default class User extends React.Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)

        console.log(fetchUser(values.id))
    }


    render() {
        return(

            <h3 style={{color:'black'}}>user</h3>
        )
    }
}
