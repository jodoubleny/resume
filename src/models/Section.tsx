class Section {
    constructor(
        public header: string,
        public contentsList: Array<SectionContents>,
        public isListType: boolean
    ){ }
}

class SectionContents {
    constructor(
        public content: string,
        public title?: string,
        public subtitle?: string,
        public period?: string
    ){ }
}

export {
    Section,
    SectionContents
}