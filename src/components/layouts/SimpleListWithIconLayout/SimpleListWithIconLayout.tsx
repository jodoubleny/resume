import React, { Fragment } from "react";
import SimpleListWithIconModel, { contentWithSimpleMarker } from "../../../models/SimpleListWithIconModel";
import styles from "./SimpleListWithIconLayout.module.css";

interface Props {
    data: SimpleListWithIconModel;
}

const SimpleListWithIconLayout = (props: Props) => {
    const simpleListWithIconLayout: JSX.Element = (
        <Fragment>
            <h1>{props.data.header}</h1>
            <ul className={styles['simpleListWithIcon-ul']}>
                {props.data.contentsList.map((content: contentWithSimpleMarker, i) => (
                <li key={i} className={styles['simpleListWithIcon-li']}>
                    <div className={styles['markerFrame']}>
                        {content.imgSrc && (
                        <img className={styles['markerSvg']} src={content.imgSrc} />
                        )}
                        {content.marker && (
                        <span className={styles['markerFontIcon']}>{content.marker}</span>
                        )}
                    </div>
                    <div className={styles['simpleListWithIcon-text']}>
                        <h2>{content.title}</h2>
                        <h3>{content.subtitle}</h3>
                    </div>
                </li>
                ))}
            </ul>
        </Fragment>
    )

    return simpleListWithIconLayout;
}

export default SimpleListWithIconLayout;