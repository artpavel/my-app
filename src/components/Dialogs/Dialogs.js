import './Dialogs.module.css'
import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(
        object => < DialogItem name = {object.name } id = { object.id }/>
    )

    let messagesElements = props.state.messagesData.map(
        object => < Message message = { object.message }/>
    )

    return (
        <div className={cl.dialogs}>
            <h2>DIALOGS</h2>
            <div className={cl.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={cl.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;