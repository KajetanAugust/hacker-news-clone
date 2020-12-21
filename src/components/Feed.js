import React from 'react'
import { fetchMainPosts } from "../utils/API";

import Post from "./Post";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

class Feed extends React.Component{

    state = {
        posts: null,
        error: null,
        loading: true,
    }

    componentDidMount() {
        this.handleFetch()
        // console.log(this.state.posts)
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

    render() {
        const { posts, loading, error } = this.state
        // console.log(this.state.posts)

        return (

            <div className="feed">

                {
                    error !== null
                        ? <ErrorMessage message={error} />
                        : (loading
                            ? <Loading text='Loading' speed={300}/>
                            : posts.map(post => <Post key={post.id} post={post}/>)
                        )
                }
            </div>
        );
    }
}

export default Feed;
