class ContentWithMarker {
    constructor(
        public content: string,
        public marker?: string,
        public link?: string
    ){ }
}

class SimpleList {
    constructor(
        public header: string,
        public contentsList: Array<ContentWithMarker>
    ){ }
}

export {
    SimpleList,
    ContentWithMarker
}