import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Namaste React JSX</h1>

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1>This is with functional component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);