import React, { Fragment } from "react";
import ButtonListWithIconModel, { contentWithButtonMarker } from "../../../models/ButtonListWithIconModel";
import styles from "./ButtonListWithIconLayout.module.css";

interface Props {
    data: ButtonListWithIconModel;
}

const ButtonListWithIconLayout = (props: Props) => {
    const buttonListWithIconLayout: JSX.Element = (
        <Fragment>
            <h1>{props.data.header}</h1>
            <ul className={styles['buttonListWithIcon-ul']}>
            {props.data.contentsList.map((content: contentWithButtonMarker, i) => (
                <li key={i} className={`${styles['buttonListWithIcon-li']}`}>
                    <div className={styles['marker-icon']}>{content.marker}</div>
                    {content.link ? (
                        <a className={styles['buttonListWithIcon-textBox']} href={content.link} target="_blank" rel="noreferrer">{content.text}</a>
                    ) : (
                        <span className={styles['buttonListWithIcon-textBox']}>{content.text}</span>
                    )}
                </li>
            ))}
            </ul>
        </Fragment>
    )

    return buttonListWithIconLayout;
}

export default ButtonListWithIconLayout;