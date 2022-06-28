import { Section } from "../../models/Section";

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
            title: "Front-end Designer",
            subtitle: "Arasaka Inc.",
            period: "2020-2077",
            content: "The Arasaka Brainworm was the first in a series of adventures that Atlas Games published under license for R. Talsorian Games&apos;s role-playing game Cyberpunk 2020. John Nephew, the founder of Atlas Games, would later recount that these adventures sold better than most d20 System books a decade later at the height of the d20 craze."
        },
        {
            title: "Front-end Designer",
            subtitle: "Arasaka Inc.",
            period: "2020-2077",
            content: "The Arasaka Brainworm was the first in a series of adventures that Atlas Games published under license for R. Talsorian Games&apos;s role-playing game Cyberpunk 2020. John Nephew, the founder of Atlas Games, would later recount that these adventures sold better than most d20 System books a decade later at the height of the d20 craze."
        }
    ]
}

export {
    personalInfo,
    workExperience,
    skillsAndExpertise
}