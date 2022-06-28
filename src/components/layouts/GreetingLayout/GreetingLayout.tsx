import React, { Fragment } from "react";
import styles from "./GreetingLayout.module.css"

const GreetingLayout = () => {
    const render: JSX.Element = (
        <Fragment>
            <div>    
                <span>Hello</span>, I&apos;m<br />
                Jonny Park
            </div>
        </Fragment>
    )
    return render;
}

export default GreetingLayout;