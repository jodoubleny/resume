import React from "react";
// import layouts
import GreetingLayout from "../../layouts/GreetingLayout/GreetingLayout";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout"
// import statics
import styles from './ResumeMain.module.css';
import * as localEnglish from '../../locales/locale.english'; 

const ResumeMain = () => {
    const render: JSX.Element = (
        <div className={styles['container']}>
            <div className={styles['section-wrapper']}>
                {/* Left column starts */}
                <div className={`${styles['column']} ${styles['column-left']}`}>
                    <div className={`${styles['section']} ${styles['profile-area']}`}></div>
                    <GreetingLayout></GreetingLayout>
                    <SectionLayout data={localEnglish.skillsAndExpertise}></SectionLayout>
                    <SectionLayout data={localEnglish.educationHistory}></SectionLayout>
                </div>
                {/* Left column ends */}
                {/* Right column starts */}
                <div className={`${styles['column']} ${styles['column-right']}`}>
                    <div className={`${styles['section']} ${styles['contact-info']}`}>
                        <div>
                            <h1>Contact</h1>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <h1>Mailing Address àá</h1>
                            <ul>
                                <li>Toronto, ON</li>
                                <li>1A2 B3C</li>
                                <li>Canada</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${styles['section']}`}>
                        <SectionLayout data={localEnglish.personalInfo}></SectionLayout>
                    </div>
                    <div className={`${styles['section']}`}>
                        <SectionLayout data={localEnglish.workExperience}></SectionLayout>
                    </div>
                </div>
                {/* Right column ends */}
            </div>
        </div>
    )

    return render;
}

export default ResumeMain;