import React from "react";
import styles from "./PortraitLayout.module.scss"

interface Props {
    imgSrc: string;
    scrollTop: number;
}

const PortraitLayout = (props: Props) => {
    const portraitLayout: JSX.Element = (
        <div className={styles.portraitFrame}>
            <img className={styles.picture} style={{bottom: `max(-100px, ${((-1*props.scrollTop)/2)-20}px)`}} src={props.imgSrc} />
            <div className={styles.background}></div>
        </div>
    );
    return portraitLayout;
}

export default PortraitLayout;