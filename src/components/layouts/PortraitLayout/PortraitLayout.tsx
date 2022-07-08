import React from "react";
import styles from "./PortraitLayout.module.css"

interface Props {
    imgSrc: string;
    scrollTop: number;
}

const PortraitLayout = (props: Props) => {
    const portraitLayout: JSX.Element = (
        <div className={styles['portrait-frame']}>
            <img className={styles['portrait-picture']} style={{bottom: `max(-100px, ${(-1*props.scrollTop)/2}px)`}} src={props.imgSrc} />
            <div className={styles['portrait-frame-background']}></div>
        </div>
    );
    return portraitLayout;
}

export default PortraitLayout;