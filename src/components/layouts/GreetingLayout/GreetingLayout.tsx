import React, { Fragment } from "react";
import styles from "./GreetingLayout.module.css"

const GreetingLayout = () => {
    const render: JSX.Element = (
        <Fragment>
            <div className={styles['greeting-container']}>
                <span>Hi</span>, I&apos;m<br />
                Jonny Park
            </div>
        </Fragment>
    )
    return render;
}

export default GreetingLayout;