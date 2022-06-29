import React, { Fragment } from "react";
import { Section, SectionContents } from "../../../models/Section";
import styles from "./SectionLayout.module.css"

interface Props {
    data: Section;
}

const SectionLayout = (props: Props) => {
    const render: JSX.Element = (
        <Fragment>
            {/* Header starts */}
            <div className={styles['section-header']}><h1>{props.data.header}</h1></div>
            {/* Header ends */}
            <ul className={`${styles['section-container']} ${styles[`${props.data.isListType ? '' : 'section-container-no-bullet'}`]}`}>
            {props.data.contentsList.map((contents: SectionContents, i) => (
                <li key={i}
                    className={styles['section-container-list']}>
                    <div className={styles['section-contents-area']}>
                        { ( contents.title || contents.subtitle ) &&
                            <ul className={styles['contents-titles']}>
                                { contents.title && <li><h2>{contents.title}</h2></li> }
                                { contents.subtitle && <li><h3>{contents.subtitle}</h3></li> }
                            </ul>
                        }
                        { contents.period && <div className={styles['contents-period']}>{contents.period}</div>}
                        <div className={styles['contents-content-text']}>{contents.content}</div>
                    </div>
                </li>
            ))}
            </ul>
        </Fragment>
    )
    return render;
}

export default SectionLayout;