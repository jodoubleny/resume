import React, { Fragment } from "react";
import ListWithIconModel, { contentWithMarker } from "../../../models/ListWithIconModel";
import styles from "./ListWithIconLayout.module.css";

interface Props {
    data: ListWithIconModel;
}

const ListWithIconLayout = (props: Props) => {
    const listWithIconLayout: JSX.Element = (
        <Fragment>
            <h1>{props.data.header}</h1>
            <ul className={styles['listWithIcon-ul']}>
            {props.data.contentsList.map((content: contentWithMarker, i) => (
                <li key={i} className={`${styles['listWithIcon-li']}`}>
                    {content.link ? (
                        <a className={styles['listWithIcon-box']} href={content.link} target="_blank" rel="noreferrer">
                        {content.marker && (
                            <div className={styles['marker-icon']}>{content.marker}</div>
                        )}
                            {content.text}
                        </a>
                    ) : <span className={styles['listWithIcon-box']}>
                        {content.marker && (
                            <div className={styles['marker-icon']}>{content.marker}</div>
                        )}
                            {content.text}
                        </span>}
                </li>
            ))}
            </ul>
        </Fragment>
    )

    return listWithIconLayout;
}

export default ListWithIconLayout;