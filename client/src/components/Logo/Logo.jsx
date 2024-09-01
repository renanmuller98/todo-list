import './logo.scss'
import rocket from '../../assets/svg/rocket.svg'

export const Logo = () => {
    return(
        <div className="logo">
            <img src={rocket} alt="LOGO" style={{width: '50px'}}/>
            <h1>todo</h1>
        </div>
    )
}