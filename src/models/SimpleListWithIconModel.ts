import ListModel from "./ListModel";

type contentWithSimpleMarker = {
    title: string,
    subtitle?: string,
    marker?: string,
    imgSrc?: string
}

class SimpleListWithIconModel extends ListModel {
    constructor(
        header: string,
        public contentsList: Array<contentWithSimpleMarker>
    ){
        super(header);
    }
}

export default SimpleListWithIconModel;
export {
    type contentWithSimpleMarker
}