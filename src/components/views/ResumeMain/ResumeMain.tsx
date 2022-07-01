import React, { useLayoutEffect, useRef, useState } from "react";
// import layouts
import GreetingLayout from "../../layouts/GreetingLayout/GreetingLayout";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout"
import SimpleListLayout from "../../layouts/SimpleListLayout/SimpleListLayout";
// import statics
import styles from './ResumeMain.module.css';
import * as localeEnglish from '../../locales/locale.english';

const ResumeMain = () => {
    const sectionWrapper = useRef<HTMLDivElement>(null);
    const columnGap = useRef<HTMLDivElement>(null);

    const [sectionWrapperHeight, setSectionWrapperHeight] = useState('');
    const [isHeightSet, setIsHeightSet] = useState(false);

    useLayoutEffect(() => {
        const sectionWrapperTop = sectionWrapper.current?.getBoundingClientRect().top;
        const columnGapTop = columnGap.current?.getBoundingClientRect().top;
        const sectionWrapperBottom = sectionWrapper.current?.getBoundingClientRect().bottom;
        if (!isHeightSet
                && typeof sectionWrapperTop != 'undefined'
                && typeof columnGapTop != 'undefined'
                && typeof sectionWrapperBottom != 'undefined') {
            const leftColumnHeight = columnGapTop - sectionWrapperTop;
            const rightColumnHeight = sectionWrapperBottom - columnGapTop;
            if (leftColumnHeight >= rightColumnHeight) {
                setSectionWrapperHeight(`${leftColumnHeight}px`);
                setIsHeightSet(true);
            } else {
                setSectionWrapperHeight(`${rightColumnHeight}px`);
                setIsHeightSet(true);
            }
        }
    });

    const locale = localeEnglish;
    const render: JSX.Element = (
        <div className={styles['container']}>
            <div ref={sectionWrapper} className={styles['section-wrapper']} style={{height: sectionWrapperHeight}}>
                <div className={`${styles['column']} ${styles['column-left']}`}>
                    <div><GreetingLayout></GreetingLayout></div>
                </div>
                <div className={`${styles['column-right']} ${styles['listSection']}`}>
                    <div className={styles['simpleList']}>
                        <SimpleListLayout data={localeEnglish.contact}></SimpleListLayout>
                    </div>
                    <div className={styles['simpleList']}>
                        <SimpleListLayout data={localeEnglish.webSites}></SimpleListLayout>
                    </div>
                </div>
                <div className={`${styles['column-right']} ${styles['section']}`}>
                        <SectionLayout data={localeEnglish.personalInfo}></SectionLayout>
                </div>
                <div className={`${styles['column']} ${styles['column-left']}`}>
                    <SectionLayout data={localeEnglish.skillsAndExpertise}></SectionLayout>
                </div>
                <div ref={columnGap} className={styles['column-gap']}></div>
                {/* <div className={`${styles['column']} ${styles['column-left']}`}>
                    <div className={`${styles['section']} ${styles['profile-area']}`}></div>
                    <GreetingLayout></GreetingLayout>
                    <SectionLayout data={localeEnglish.skillsAndExpertise}></SectionLayout>
                    <SectionLayout data={localeEnglish.educationHistory}></SectionLayout>
                </div>
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
                </div> */}
            </div>
        </div>
    )

    return render;
}

export default ResumeMain;