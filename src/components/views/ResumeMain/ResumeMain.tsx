import { render } from "@testing-library/react";
import React from "react";
import './ResumeMain.css';

const ResumeMain = () => {
    const render: JSX.Element = (
        <div className="containter">
            <div className="grid-wrapper">
                <div className="grid-box grid-col-1">
                    <div className="grid-header">Work Experience</div>
                    <div className="grid-content">
                        <div className="grid-content-title">Front-end Designer</div>
                        <div className="grid-content-subtitle">Arasaka Inc.</div>
                        <div className="grid-content-years">2000-2077</div>
                        <div className="grid-content-text">
                            TESTTESTTEST
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return render;
}

export default ResumeMain;