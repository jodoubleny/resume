import React, { Fragment, useCallback, useLayoutEffect, useRef, useState } from "react";
// import layouts
import GreetingLayout from "../../layouts/GreetingLayout/GreetingLayout";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout"
import SimpleListLayout from "../../layouts/SimpleListLayout/SimpleListLayout";
// import statics
import styles from './ResumeMain.module.css';
import * as localeEnglish from '../../locales/locale.english';

const getWindowWidth = (): number => {
    return window.innerWidth;
}

const ResumeMain = () => {
    const [viewportWidth, setViewportWidth] = useState(getWindowWidth());

    /* when the window is resized, get the window width and set it to viewportWidth */
    useLayoutEffect(() => {
        const handleWindowResize = (): void => {
            setViewportWidth(getWindowWidth());
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    const handlePrintButton = () => {
        window.print();
    }

    const locale = localeEnglish;
    const mobileLayoutStartWidth = 690;

    const leftColumnItems: JSX.Element = (
        <Fragment>
            <div style={{order: "1"}} className={`${styles['grid-item']}`}>
                <div><GreetingLayout></GreetingLayout></div>
            </div>
            <div style={{order: "2"}} className={`${styles['grid-item']} ${styles['listSection']}`}>
                <div className={styles['simpleList']}>
                    <SimpleListLayout data={locale.contact}></SimpleListLayout>
                </div>
                <div className={styles['simpleList']}>
                    <SimpleListLayout data={locale.webSites}></SimpleListLayout>
                </div>
            </div>
            <div style={{order: "3"}} className={`${styles['grid-item']}`}>
                <SectionLayout data={locale.skillsAndExpertise}></SectionLayout>
            </div>
        </Fragment>
    );

    const rightColumnItems: JSX.Element = (
        <Fragment>
            <div className={styles['printableAlert']} onClick={handlePrintButton}>
                <div className={styles['printableAlertIcon']}>print</div>
                <div>
                    <span>This is a print-friendly webpage résumé.</span>
                    <br />
                    <span>Just use the print menu of your web browser or </span>
                    <span>touch/click this message.</span>
                </div>
            </div>
            <div style={{order: "2"}} className={`${styles['grid-item']}`}>
                <SectionLayout data={locale.personalInfo}></SectionLayout>
            </div>
            <div className={`${styles['grid-item']}`}>
                <SectionLayout data={locale.workExperience}></SectionLayout>
            </div>
            <div className={`${styles['grid-item']}`}>
                <SectionLayout data={locale.educationHistory}></SectionLayout>
            </div>
        </Fragment>
    );

    const resumeMainPage: JSX.Element = (
        <div className={styles['container']}>
            <div className={styles['columns-wrapper']}>
                <div className={`${styles['column']} ${styles['left-column']}`}>
                    {leftColumnItems}
                    {viewportWidth < mobileLayoutStartWidth && rightColumnItems}
                </div>
                {viewportWidth >= mobileLayoutStartWidth && (
                <div className={`${styles['column']} ${styles['right-column']}`}>
                    {rightColumnItems}
                </div>
                )}
            </div>
        </div>
    )

    return resumeMainPage;
}

export default ResumeMain;