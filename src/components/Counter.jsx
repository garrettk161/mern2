import { useState } from "react";

const Counter = () => {
    const [countState, setCountState] = useState(77)

    function incCount() {
        setCountState(countState +1)
    }
    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+1</button>
        </div>
    )
}
export default Counter;