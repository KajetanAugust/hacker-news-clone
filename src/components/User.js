import React from 'react'
import queryString from 'query-string'
import { ThemeConsumer } from "../contexts/theme";
import { fetchUser, fetchPosts } from "../utils/API";
import Loading from "./Loading";
import Post from "./Post";

export default class User extends React.Component {

    state = {
        user: null,
        loadingUser: true,
        posts: null,
        loadingPosts: true,
        error: null,
    }
    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        fetchUser(id)
            .then((user) => {
                this.setState({ user, loadingUser: false})

                return fetchPosts(user.submitted.slice(0, 30))
            })
            .then((posts) => this.setState({
                posts,
                loadingPosts: false,
                error: null
            }))
            .catch(({ message }) => this.setState({
                error: message,
                loadingUser: false,
                loadingPosts: false
            }))
    }

    render() {

        const { user, posts, loadingUser, loadingPosts, error } = this.state
        console.log(user)
        console.log(posts)
        return(

            <div>
                <React.Fragment>
                    {
                        loadingUser
                            ? <Loading text='Loading' speed={300}/>
                            //TODO: Add user metadata here
                            : <h3 style={{color:'black'}}>{this.state.user.id}</h3>
                    }
                </React.Fragment>

                <React.Fragment>
                    {
                        loadingPosts
                            ? <Loading text='Loading' speed={300}/>
                            : posts.map(post => <Post post={post} key={post.id}/>)
                    }
                </React.Fragment>
            </div>
        )
    }
}
