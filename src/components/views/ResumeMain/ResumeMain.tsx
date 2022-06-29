import React from "react";
// import layouts
import GreetingLayout from "../../layouts/GreetingLayout/GreetingLayout";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout"
import SimpleListLayout from "../../layouts/SimpleListLayout/SimpleListLayout";
// import statics
import styles from './ResumeMain.module.css';
import * as localeEnglish from '../../locales/locale.english'; 

const ResumeMain = () => {
    const render: JSX.Element = (
        <div className={styles['container']}>
            <div className={styles['section-wrapper']}>
                {/* Left column starts */}
                <div className={`${styles['column']} ${styles['column-left']}`}>
                    <div className={`${styles['section']} ${styles['profile-area']}`}></div>
                    <GreetingLayout></GreetingLayout>
                    <SectionLayout data={localeEnglish.skillsAndExpertise}></SectionLayout>
                    <SectionLayout data={localeEnglish.educationHistory}></SectionLayout>
                </div>
                {/* Left column ends */}
                {/* Right column starts */}
                <div className={`${styles['column']} ${styles['column-right']}`}>
                    <div className={styles['listSection']}>
                        <div className={styles['simpleList']}>
                            <SimpleListLayout data={localeEnglish.contact}></SimpleListLayout>
                        </div>
                        <div className={styles['simpleList']}>
                            <SimpleListLayout data={localeEnglish.webSites}></SimpleListLayout>
                        </div>
                    </div>
                    <div className={`${styles['section']}`}>
                        <SectionLayout data={localeEnglish.personalInfo}></SectionLayout>
                    </div>
                    <div className={`${styles['section']}`}>
                        <SectionLayout data={localeEnglish.workExperience}></SectionLayout>
                    </div>
                </div>
                {/* Right column ends */}
            </div>
        </div>
    )

    return render;
}

export default ResumeMain;