import { Link } from "react-router-dom"
const Landing=()=>{
    return (
        <>
        <div className="Landing">
            <img className="landing_img" src="http://thesweetsetup.com/wp-content/uploads/2016/12/MacBook-Pro-Review-23.jpg" alt="" />
            <div className="name_button">
                <h2 className="name">The 10X Academy</h2>
                <Link className="button" to='/postview'>Enter</Link>
            </div>
        </div>
        </>
    )
}
export default Landing