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
        }
    ]
}

const webSites: SimpleList = {
    header: "Websites",
    contentsList: [
        {
            marker: "code",
            content: "github.com/jodoubleny",
            link: `https://www.github.com/jodoubleny`
        }
    ]
}

const skillsAndExpertise: Section = {
    header: "Skills & Expertise",
    isListType: true,
    contentsList: [
        {
            content: "UI/UX Design"
        },
        {
            content: "HTML/CSS Coding"
        },
        {
            content: "Landing Page & App Design"
        },
        {
            content: "Full-stack designer"
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
            period: "2020 - 022",
            content: "GPA: 4.24"
        }
    ]
}

const personalInfo: Section = {
    header: "About me",
    isListType: false,
    contentsList: [
        {
            content: "Lady Sylvanas Windrunner, formerly styled 'the Dark Lady' and 'the Banshee Queen', is the former Warchief of the Horde and former supreme ruler of the Forsaken, one of the most powerful factions of undead on Azeroth. In life, Sylvanas was the ranger-general of Silvermoon, whose leadership acumen and martial prowess were without equal. During the Third War, she bravely defended Quel'Thalas from a Scourge invasion led by the death knight Arthas Menethil. Ultimately, however, Sylvanas fell in battle. Rather than honor the ranger-general with a quick death, Arthas ripped out her soul and transformed it into a banshee: a cunning and vengeful agent of the Lich King empowered by hate."
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