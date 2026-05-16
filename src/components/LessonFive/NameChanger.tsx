import {useState} from "react";
import * as React from "react";

const NameChanger = () => {
    const [name,setName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold">Hello, {name || "Stranger"}</h1>
            <div className="text-center mt-4">
                <input
                    type="text"
                    className="border text-center px-4 py-2"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}
export default NameChanger;