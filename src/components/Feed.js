import React from 'react'
import Post from "./Post";
import { fetchMainPosts } from "../utils/API";

class Feed extends React.Component{

    state = {
        posts: null,
        error: null,
        loading: true,
    }
    componentDidMount() {
        this.handleFetch()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.handleFetch()
        }
    }
    handleFetch () {
        this.setState({
            posts: null,
            error: null,
            loading: true
        })

        fetchMainPosts(this.props.type)
            .then((posts) => this.setState({
                posts,
                loading: false,
                error: null
            }))
            .catch(({ message }) => this.setState({
                error: message,
                loading: false
            }))
    }

    // isLoading() {
    //     const { selectedType, posts, error } = this.state
    //
    //     return !posts[selectedType] && error === null
    // }

    render() {

        const { posts, error, loading } = this.state
        console.log(this.state.posts)

        return (


            <div className="App">
                {loading
                    ? <h3>Loading...</h3>
                    : posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        );
    }
}

export default Feed;
