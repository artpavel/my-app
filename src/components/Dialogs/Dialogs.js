import './Dialogs.module.css'
import cl from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return(
        <div className={cl.dialogs}>
            <h2>DIALOGS</h2>
            <div className={cl.dialogsItems}>
                <div className={`${cl.dialog} ${cl.active}`}>
                    <NavLink to="/dialogs/1">Dimas</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/5">Victor</NavLink>
                </div>
                <div className={cl.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>
            </div>
            <div>
                <div className={cl.messages}>
                    <div className={cl.message}>Hi</div>
                    <div className={cl.message}>How is your it-kamasutra?</div>
                    <div className={cl.message}>Yo</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;