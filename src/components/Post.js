import React from 'react'
import PostMeta from "./PostMeta";
import Title from "./Title";
import { ThemeConsumer } from "../contexts/theme";

export default class Post extends React.Component {
    render() {
        const {post} = this.props
        return (
            <ThemeConsumer>
                {({theme}) => (
                    <div className={`post-container-${theme}`}>
                            <Title
                                id={post.id}
                                title={post.title}
                                url={post.url}
                            />

                        <PostMeta
                            by={post.by}
                            time={post.time}
                            id={post.id}
                            descendants={post.descendants}
                        />
                    </div>
                )}
            </ThemeConsumer>
        );
    }
}
