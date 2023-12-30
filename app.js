const h1 = React.createElement("h1", {}, "h1 tag 1");
const h2 = React.createElement("h1", {}, "h1 tag 2");
const child = React.createElement("div", { id: "child" }, [h1, h2]);
const heading = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
