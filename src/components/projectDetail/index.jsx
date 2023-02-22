import React, { useState, useEffect } from 'react';
import styles from './index.less';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

const ProjectDetail = ({url}) => {
    const [markdownString, setMarkdownString] = useState("");

    useEffect(() => {
        convertMdToString(url);
    }, [])

    const convertMdToString = (file) => {
        fetch(file).then((response) => response.text()).then((text) => {
            setMarkdownString(text);
        });        
    }

    return (
        <div className={styles.lessonResources}>
            <div className={styles.content}>
                <ReactMarkdown className='markdown-body' children={markdownString} skipHtml={false} />
            </div>
        </div>
    )
}

export default ProjectDetail;