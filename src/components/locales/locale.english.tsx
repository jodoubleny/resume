import React from "react";
import { ListWithPeriodModel } from "../../models/ListWithPeriodModel";
import { Section } from "../../models/Section";
import { SimpleList } from "../../models/SimpleList";

const contact: SimpleList = {
    header: "Contact",
    contentsList: [
        {
            marker: "call",
            content: "(+1) 416-951-3856",
            link: "call:+14169513856"
        },
        {
            marker: "mail",
            content: "jodoubleny@yahoo.com",
            link: "mailto:jodoubleny@yahoo.com"
        },
        {
            marker: "home",
            content: "East York, ON"
        }
    ]
}

const webSites: SimpleList = {
    header: "Links",
    contentsList: [
        {
            marker: "code",
            content: "github.com/jodoubleny",
            link: `https://www.github.com/jodoubleny`
        },
        {
            marker: "description",
            content: "linkedin.com/in/jonnypark/",
            link: `https://www.linkedin.com/in/jonnypark/`
        }
    ]
}

const skillsAndExpertise: Section = {
    header: "Skills",
    isListType: true,
    contentsList: [
        {
            content: "ASP.net Backend with C#"
        },
        {
            content: "Micro services based on Spring Boot"
        },
        {
            content: "MERN stack with Typescript"
        },
        {
            content: "Electron.js with Typescript"
        }
    ]
}

const educationLocale: ListWithPeriodModel = {
    header: "Education",
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


const personalInfo: Section = {
    header: "About me",
    isListType: false,
    contentsList: [
        {
            content: "Good day! I'm a web developer from Seoul, currently based in Toronto, Canada. I'm interested in web technologies beyond the web. I believe opened web environment can make the world better."
        }
    ]
}

export {
    contact,
    webSites,
    personalInfo,
    educationLocale,
    workExperience,
    skillsAndExpertise
}