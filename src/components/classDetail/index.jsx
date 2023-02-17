import React, { useState, useEffect } from 'react';
import styles from './index.less';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

const mdUrl = "lessonDetail.md";

const ClassDetail = () => {
    const [markdownString, setMarkdownString] = useState(null);

    useEffect(() => {
        convertMdToString(mdUrl);
    }, [])

    const convertMdToString = (file) => {
        fetch(file).then((response) => response.text()).then((text) => {
            setMarkdownString(text);
        });        
    }

    return (
        <div className={styles.lessonResources}>
            <div className={styles.title}>课程详情</div>
            <div className={styles.content}>
                <ReactMarkdown className='markdown-body' children={markdownString} skipHtml={false} />
            </div>
        </div>
    )
}

export default ClassDetail;