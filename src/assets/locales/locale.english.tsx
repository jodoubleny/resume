import React from "react";
import ButtonListWithIconModel from "../../models/ButtonListWithIconModel";
import ListWithPeriodModel from "../../models/ListWithPeriodModel";
import SimpleListWithIconModel from "../../models/SimpleListWithIconModel";
// import assets
import reactSvg from '../images/react.svg';
import dotnetSvg from '../images/dotnet.svg';
import electronSvg from '../images/electron.svg';

const contactLocale: ButtonListWithIconModel = {
    header: "Contact",
    contentsList: [
        {
            marker: "call",
            text: "(+1) 416-951-3856",
            link: "tel:+14169513856"
        },
        {
            marker: "mail",
            text: "jodoubleny@yahoo.com",
            link: "mailto:jodoubleny@yahoo.com"
        },
        {
            marker: "home",
            text: "Toronto, ON"
        }
    ]
}

const linksLocale: ButtonListWithIconModel = {
    header: "Links",
    contentsList: [
        {
            marker: "code",
            text: "github.com/jodoubleny",
            link: `https://www.github.com/jodoubleny`
        },
        {
            marker: "description",
            text: "linkedin.com/in/jonnypark",
            link: `https://www.linkedin.com/in/jonnypark/`
        }
    ]
}

const skillsLocale: SimpleListWithIconModel = {
    header: "Skills",
    contentsList: [
        {
            title: "C#",
            subtitle: "ASP.NET Backend",
            imgSrc: `${dotnetSvg}`
        },
        {
            title: "React.js",
            subtitle: "with TypeScript",
            imgSrc: `${reactSvg}`
        },
        {
            title: "Electron.js",
            subtitle: "with Javascript",
            imgSrc: `${electronSvg}`
        }
    ]
}

const languageLocale: SimpleListWithIconModel = {
    header: "Languages",
    contentsList: [
        {
            title: "English",
            marker: "language"
        },
        {
            title: "Korean",
            marker: "language"
        }
    ]
}

const educationLocale: ListWithPeriodModel = {
    header: "Education",
    accentColor: "103, 95, 229",
    contentsList: [
        {
            period: "2020-2022",
            title: "Adv. Diploma of Software Engineering Technology",
            subtitle: "Centennial College (Toronto, Canada)",
            textList: [
                React.createElement('span', null, `GPA: 4.308`)
            ]
        },
        {
            period: "2007-2014",
            title: "Bachelor of Business",
            subtitle: "Kwangwoon Univ. (Seoul, Korea)",
            textList: [
                React.createElement('span', null, `GPA: 3.77`)
            ]
        }
    ]
}

const workExperience: ListWithPeriodModel = {
    header: "Work Experience",
    accentColor: "224, 69, 34",
    contentsList: [
        {
            period: "2015-2018",
            title: "Junior Digital Marketer",
            subtitle: "Neogames (Seoul, Korea)",
            textList: [
                React.createElement('span', null, `Planned and executed digital marketing strategies.`)
            ]
        },
        {
            period: "2018-2019",
            title: "Hall Manager",
            subtitle: "Sejong (Sydney, Australia)",
            textList: [
                React.createElement('span', null, `Gained a change to work in a diverse environment.`)
            ]
        }
    ]
}

export {
    contactLocale,
    linksLocale,
    educationLocale,
    workExperience,
    skillsLocale,
    languageLocale
}