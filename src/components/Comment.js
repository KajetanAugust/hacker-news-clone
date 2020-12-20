import React from 'react'
import { formatDate } from "../utils/helpers";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";


export default function Comment ({comment}) {
    return(
        <ThemeConsumer>
            {({theme}) => (
                    // TODO: Add styling for dark and light comment box
                    <div className={`comment-box-${theme}`}>
                        <div className={`meta-info-${theme}`}>
                            <span>by <Link to={`/user?id=${comment.by}`}>{comment.by}</Link> {formatDate(comment.time)}</span>
                            {/*TODO: add styling for links in comment text inside p tag*/}
                            <p dangerouslySetInnerHTML={{__html: comment.text}} />
                        </div>
                    </div>
                )
            }
        </ThemeConsumer>


    )
}
