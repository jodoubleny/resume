import React, { Fragment, useCallback, useLayoutEffect, useRef, useState } from "react";
// import layouts
import GreetingLayout from "../../layouts/GreetingLayout/GreetingLayout";
import ListWithPeriodLayout from "../../layouts/ListWithPeriod/ListWithPeriodLayout";
import ButtonListWithIconLayout from "../../layouts/ButtonListWithIconLayout/ButtonListWithIconLayout";
import PortraitLayout from "../../layouts/PortraitLayout/PortraitLayout";
import SimpleListWithIconLayout from "../../layouts/SimpleListWithIconLayout/SimpleListWithIconLayout";
// import assets
import styles from './ResumeMain.module.css';
import * as localeEnglish from '../../../assets/locales/locale.english';
import portraitPicture from '../../../assets/images/portrait.webp';


const getWindowWidth = (): number => {
    return window.innerWidth;
}

const getWindowScrollY = (): number => {
    return window.scrollY;
}

const ResumeMain = () => {
    const [viewportWidth, setViewportWidth] = useState(getWindowWidth());
    const [scrollTop, setScrollTop] = useState(getWindowScrollY());

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

    useLayoutEffect(() => {
        const handleScrollChange = (): void => {
            setScrollTop(getWindowScrollY());
        };

        window.addEventListener('scroll', handleScrollChange);
        return () => {
            window.removeEventListener('scroll', handleScrollChange);
        }
    }, []);

    // const handlePrintButton = () => {
    //     window.print();
    // }

    const locale = localeEnglish;
    const mobileLayoutStartWidth = 690;

    const leftColumnItems: JSX.Element = (
        <Fragment>
            <div className={`${styles['grid-item']} ${styles['item-profileArea']}`} style={{order: "0"}}>
                <div className={styles['profileArea-portrait']}>
                    <PortraitLayout imgSrc={portraitPicture} scrollTop={scrollTop}></PortraitLayout>
                </div>
                <div className={styles['profileArea-greeting']}><GreetingLayout></GreetingLayout></div>
                <div className={`${styles['profileArea-comment']}`}>{`Good day! I'm a web developer from Seoul, currently based in Toronto, Canada. I'm interested in web technologies beyond the web. I believe opened web environment can make the world better.`}</div>
            </div>
            <div className={`${styles['grid-item']}`} style={{order: "3"}} >
                <SimpleListWithIconLayout data={locale.skillsLocale}></SimpleListWithIconLayout>
            </div>
            <div className={`${styles['grid-item']}`} style={{order: "5"}} >
                <SimpleListWithIconLayout data={locale.languageLocale}></SimpleListWithIconLayout>
            </div>
        </Fragment>
    );

    const rightColumnItems: JSX.Element = (
        <Fragment>
            <div className={styles['grid-item']} style={{order: "2"}} >
                <div className={styles['listSection']}>
                    <div>
                        <ButtonListWithIconLayout data={locale.contactLocale}></ButtonListWithIconLayout>
                    </div>
                    <div>
                        <ButtonListWithIconLayout data={locale.linksLocale}></ButtonListWithIconLayout>
                    </div>
                </div>
            </div>
            <div className={styles['grid-item']}>
                <ListWithPeriodLayout data={locale.educationLocale}></ListWithPeriodLayout>
            </div>
            <div className={styles['grid-item']}>
                <ListWithPeriodLayout data={locale.workExperience}></ListWithPeriodLayout>
            </div>
        </Fragment>
    );

    const resumeMainPage: JSX.Element = (
        <div className={`${styles['container']}`}>
            <div className={`${styles['columns-wrapper']}`}>
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