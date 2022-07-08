import ListModel from "./ListModel";

type contentWithButtonMarker = {
    text: string,
    marker?: string,
    link?: string
}

class ButtonListWithIconModel extends ListModel {
    constructor(
        header: string,
        public contentsList: Array<contentWithButtonMarker>
    ){
        super(header);
    }
}

export default ButtonListWithIconModel;
export {
    type contentWithButtonMarker
}