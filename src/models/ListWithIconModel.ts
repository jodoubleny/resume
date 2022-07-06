import ListModel from "./ListModel";

type contentWithMarker = {
    text: string,
    marker?: string,
    link?: string
}

class ListWithIconModel extends ListModel {
    constructor(
        header: string,
        public contentsList: Array<contentWithMarker>
    ){
        super(header);
    }
}

export default ListWithIconModel;
export {
    type contentWithMarker
}