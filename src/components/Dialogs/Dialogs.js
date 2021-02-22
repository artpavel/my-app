import './Dialogs.module.css'
import cl from './Dialogs.module.css'


const Dialogs = (props) => {
    return(
        <div className={cl.dialogs}>
            <h2>DIALOGS</h2>
            <div className={cl.dialogsItems}>
                <div className={`${cl.dialog} ${cl.active}`}>
                    Dimas
                </div>
                <div className={cl.dialog}>
                    Andrey
                </div>
                <div className={cl.dialog}>
                    Sveta
                </div>
                <div className={cl.dialog}>
                    Sasha
                </div>
                <div className={cl.dialog}>
                    Victor
                </div>
                <div className={cl.dialog}>
                    Valera
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