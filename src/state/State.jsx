import { useState } from "react";

const State = () => {
    const [data, setData] = useState({
        name: "",
        gender: "",
        message: "",
        age: 0
    });

    const changeHandle = (e) => {
        e.preventDefault();
        console.log(data); 
    };

    return (
        <div>
            <form onSubmit={changeHandle}>
             <label>Name:</label>
                <input 
                    placeholder="Enter your name" 
                    onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                />
                <label>Your gender:</label>
                <select 
                    value={data.gender}
                    onChange={(e) => setData((prev) => ({ ...prev, gender: e.target.value }))}
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <label>Message:</label>
                <input 
                    placeholder="Enter the message" 
                    onChange={(e) => setData((prev) => ({ ...prev, message: e.target.value }))}
                />
                <label>your age:</label>
                <input 
                    placeholder="Enter your age" 
                    type="number"
                    onChange={(e) => setData((prev) => ({ ...prev, age: Number(e.target.value) }))}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default State;
