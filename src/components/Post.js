import React from 'react'
import PostMeta from "./PostMeta";
import Title from "./Title";

export default class Post extends React.Component {
    render() {
        const { post } = this.props
        return (
            <div>
                <h3>
                    <Title
                        id={post.id}
                        title={post.title}
                        url={post.url}
                    />
                </h3>

                <PostMeta
                    by={post.by}
                    time={post.time}
                    id={post.id}
                    descendants={post.descendants}
                />
            </div>
        );
    }
}
