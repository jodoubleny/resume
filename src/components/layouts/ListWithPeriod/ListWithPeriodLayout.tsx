import React from "react";
import ListWithPeriodModel, { contentWithPeriod } from "../../../models/ListWithPeriodModel";
import styles from "./ListWithPeriodLayout.module.scss";

interface Props {
    data: ListWithPeriodModel;
}

const ListWithPeriodLayout = (props: Props) => {

    const listWithPeriodLayout: JSX.Element = (
        <div className={styles.listWithPeriodWrapper}>
            <h1>{props.data.header}</h1>
            <div className={styles.contentList} style={(props.data.accentColor && ({"--accent-color": `${props.data.accentColor}`})) as React.CSSProperties}>
                {props.data.contentsList.map((content: contentWithPeriod, i) => (
                <div key={i} className={styles.listWithPeriod}>
                    <div className={styles.periodMarker}>{content.period}</div>
                    <h2>{content.title}</h2>
                    <h3>{content.subtitle}</h3>
                    <ul className={styles.textList}>
                        {content.textList.map((text: JSX.Element, j) => (
                        <li key={j}>{text}</li>
                        ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>
    );
    return listWithPeriodLayout;
}

export default ListWithPeriodLayout;