import React from 'react'
import queryString from "query-string";
import { ThemeConsumer } from "../contexts/theme";

import { fetchItem, fetchComments } from "../utils/API";

import Post from "./Post";
import Loading from "./Loading";
import Comment from "./Comment";
import ErrorMessage from "./ErrorMessage";

export default class PostPage extends React.Component {

    state = {
        post: null,
        comments: null,
        loadingPost: true,
        loadingComments: true,
        error: null
    }

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)

        fetchItem(id)
            .then(res => {
                this.setState({
                    post: res,
                    loadingPost: false,
                    error: null
                })
                return fetchComments(res.kids)
            }).then(comments => this.setState({
                comments: comments,
                loadingComments: false,
                error: null
            })).catch(({ message }) => this.setState({
                error: message,
                loadingUser: false,
                loadingPosts: false
            }))

    }

    render() {
        // console.log(this.state.post)
        // console.log(this.state.comments)
        const {post, comments, loadingComments, loadingPost, error} = this.state
        return (
            <ThemeConsumer>
                {({theme}) => (


                    <div className={`post-page-wrapper-${theme}`}>
                        error !== null && <ErrorMessage message={error} />

                        <React.Fragment>
                            {
                                loadingPost
                                    ? <Loading text='Loading Post' speed={300}/>
                                    : <Post key={post.id} post={post} />
                            }
                        </React.Fragment>
                        {
                            !loadingPost && (
                                <React.Fragment>
                                    {
                                        loadingComments
                                            ? <Loading text='Loading Comments' speed={300}/>
                                            : comments.map( comment => <Comment key={comment.id} comment={comment}/>)
                                    }
                                </React.Fragment>
                            )
                        }

                    </div>
                )}
            </ThemeConsumer>
        )
    }
}
