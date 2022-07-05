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
    header: "Skills & Expertise",
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

const educationHistory: Section = {
    header: "Education",
    isListType: true,
    contentsList: [
        {
            title: "Adv. Diploma of Software Engineering Technology",
            subtitle: "Centennial College (Toronto)",
            period: "2020 - 2022",
            content: "GPA: 4.308"
        },
        {
            title: "Bachelor of Business",
            subtitle: "Kwangwoon Univ. (Seoul)",
            period: "2007 - 2014",
            content: "GPA: 3.77"
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

const workExperience: Section = {
    header: "Work Experience",
    isListType: true,
    contentsList: [
        {
            title: "Junior Digital Marketer",
            subtitle: "Neogames (Seoul, Republic of Korea)",
            period: "2015-2018",
            content: "Planned and executed digital marketing strategies."
        },
        {
            title: "Hall Manager",
            subtitle: "Sejong (Sydney, Australia)",
            period: "2018-2019",
            content: "Gained a change to work in a diverse environment."
        }
    ]
}

export {
    contact,
    webSites,
    personalInfo,
    educationHistory,
    workExperience,
    skillsAndExpertise
}