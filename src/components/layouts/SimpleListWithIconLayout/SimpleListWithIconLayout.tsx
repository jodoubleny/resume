import React, { Fragment } from "react";
import SimpleListWithIconModel, { contentWithSimpleMarker } from "../../../models/SimpleListWithIconModel";
import styles from "./SimpleListWithIconLayout.module.scss";

interface Props {
    data: SimpleListWithIconModel;
}

const SimpleListWithIconLayout = (props: Props) => {
    const simpleListWithIconLayout: JSX.Element = (
        <Fragment>
            <h1>{props.data.header}</h1>
            <ul className={styles.wrapperUl}>
                {props.data.contentsList.map((content: contentWithSimpleMarker, i) => (
                <li key={i} className={styles.itemLi}>
                    <div className={styles.marker}>
                        {content.imgSrc && (
                        <img className={styles.svg} src={content.imgSrc} />
                        )}
                        {content.marker && (
                        <span className={styles.fontIcon}>{content.marker}</span>
                        )}
                    </div>
                    <div className={styles.text}>
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