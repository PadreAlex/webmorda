import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupClass = (props: any) => {
    return (
        <Popup open={props.isOpen} onClose={props.setOpen(false)} modal>
            <div>

            </div>
        </Popup>
    )
}

export default PopupClass