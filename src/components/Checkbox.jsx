import { useReducer } from "react";

export const Checkbox = ({ label, onChecking, onUnchecking }) => {
  const [checked, toggle] = useReducer((checked) => {
    checked = !checked;
    if (checked) {
      onChecking();
    } else {
      onUnchecking();
    }
    return checked;
  }, false);

  return (
    <>
      <label htmlFor={label} className="checkbox-label">
        <input
          type="checkbox"
          id={label}
          className="checkbox-input"
          value={checked}
          onChange={toggle}
        ></input>{" "}
        {label}
      </label>
    </>
  );
};
