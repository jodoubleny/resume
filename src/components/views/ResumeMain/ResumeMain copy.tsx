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
                        <div className="grid-content-header">
                            <div className="grid-content-title-group">
                                <div className="grid-content-title">Front-end Designer</div>
                                <div className="grid-content-subtitle">Arasaka Inc.</div>
                            </div>
                            <div className="grid-content-years">2000-2077</div>
                        </div>
                        <div className="grid-content-text"> The Arasaka Brainworm was the first in a series of adventures that Atlas Games published under license for R. Talsorian Games&apos;s role-playing game Cyberpunk 2020. John Nephew, the founder of Atlas Games, would later recount that these adventures sold better than most d20 System books a decade later at the height of the d20 craze.</div>
                    </div>
                </div>
            </div>
        </div>
    )

    return render;
}

export default ResumeMain;