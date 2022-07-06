class ListWithPeriodModel {
    constructor(
        public header: string,
        public contentsList: Array<ListWithPeriodContentModel>
    ){ }
}

class ListWithPeriodContentModel {
    constructor(
        public period: string,
        public title: string,
        public subtitle: string,
        public textList: Array<JSX.Element>
    ){ }
}

export {
    ListWithPeriodModel,
    ListWithPeriodContentModel
}