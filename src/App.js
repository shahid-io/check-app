import "./styles.css";
import { useState } from "react";
export default function App() {
  const items = ["shahid", "anand", "sanny", "kamal"];

  const [names, setNames] = useState(items);
  const [checks, setChecks] = useState(Array(items.length).fill(false));

  // const handleDelete = (name) => {
  //   setNames(names.filter((el) => el !== name));
  // };
  const handleDelete = () => {
    const updatedNames = names.filter((_, index) => !checks[index]);
    setNames(updatedNames);
    setChecks(Array(updatedNames.length).fill(false));
  };
  const handleCheckboxChange = (i) => {
    const updateChecks = [...checks];
    updateChecks[i] = !updateChecks[i];
    setChecks(updateChecks);
  };

  return (
    <div className="App">
      <ul>
        {names.map((name, i) => (
          <li key={name}>
            <input
              type="checkbox"
              checked={checks[i]}
              onChange={() => handleCheckboxChange(i)}
            />
            {name}
            <button type="button" onClick={() => handleDelete(name)}>
              DEL
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
