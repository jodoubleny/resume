import React from "react";
import { SimpleList, ContentWithMarker } from "../../../models/SimpleList";
import styles from "./SimpleListLayout.module.css";

interface Props {
    data: SimpleList;
}

const ResumeItem = (props: Props) => {
    const item: JSX.Element = (
        <div>
            {/* Header starts */}
            <div className={styles['simpleList-header']}>
                <h1>{props.data.header}</h1>
            </div>
            {/* Header ends */}
            <ul className={`${styles['simpleList-ul']}`}>
            {props.data.contentsList.map((content: ContentWithMarker, i) => (
                <li key={i} className={`${styles['simpleList-li']}`}>
                    {content.marker && (
                        <div className={styles['simpleList-marker']}>{content.marker}</div>
                    )}
                    <a href={content.link} target="_blank" rel="noreferrer">
                        {content.content}
                    </a>
                </li>
            ))}
            </ul>
        </div>
    )

    return item;
}

export default ResumeItem;