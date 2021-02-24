import cl from './Display.module.css'
import DisplayItem from "./DisplayItem";



const Display = (props) => {


    let friendsNav = props.displaysNav.map(
        fr => <DisplayItem name = { fr.name }/> )

    return (
        <div>
            <h2>Friends</h2>
            <div className={cl.block}>
                { friendsNav }
            </div>
        </div>
    )
}

export default Display