import ListModel from "./ListModel";

type contentWithPeriod = {
    period: string,
    title: string,
    subtitle: string,
    textList: Array<JSX.Element>
}

class ListWithPeriodModel extends ListModel {
    constructor(
        header: string,
        public contentsList: Array<contentWithPeriod>,
        public accentColor?: string
    ){
        super(header);
    }
}

export default ListWithPeriodModel;
export {
    type contentWithPeriod
}