import "./howto.css";

export default function Howto() {
    return (
        <div className="howto" id="howto" >
            <div className="containerHowto">
                <div className="itemHowto">
                    <img className="imgHowto" src="assets/demo3.png" alt="" />
                    <h2 className="h2Howto">How To Use Planner</h2>
                </div>
                <div className="itemHowto">
                    <img className="imgHowto" src="assets/demo4.png" alt="" />
                    <h2 className="h2Howto">How To Use To Do List</h2>
                </div>
                <div className="itemHowto">
                    <img className="imgHowto" src="assets/demo5.png" alt="" />
                    <h2 className="h2Howto">How To Use Horoscope</h2>
                </div>
            </div>
        </div>
    )
}
