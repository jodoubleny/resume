import React, { Fragment } from "react";
import { SimpleList, ContentWithMarker } from "../../../models/SimpleList";
import styles from "./SimpleListLayout.module.css";

interface Props {
    data: SimpleList;
}

const SimpleListLayout = (props: Props) => {
    const pageRender: JSX.Element = (
        <Fragment>
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
        </Fragment>
    )

    return pageRender;
}

export default SimpleListLayout;