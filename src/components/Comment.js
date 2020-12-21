import React from 'react'
import { formatDate } from "../utils/helpers";
import { ThemeConsumer } from "../contexts/theme";
import { Link } from "react-router-dom";


export default function Comment ({comment}) {
    return(
        <ThemeConsumer>
            {({theme}) => (
                    <div className={`comment-box-${theme}`}>
                        <div className={`meta-info-${theme}`}>
                            <span>by <Link to={`/user?id=${comment.by}`}>{comment.by}</Link> {formatDate(comment.time)}</span>
                            <p className={`comment-text-${theme}`} dangerouslySetInnerHTML={{__html: comment.text}} />
                        </div>
                    </div>
                )
            }
        </ThemeConsumer>


    )
}
