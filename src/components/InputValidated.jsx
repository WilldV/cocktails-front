import { formatHeader } from "../utils";

export default function InputValidated({
  type,
  name,
  value,
  options,
  error,
  cb,
}) {
  const id = "f" + name;

  const onChange = (e) => {
    cb({ [name]: e.target.value });
  };

  return (
    <>
      <div className={"input-group" + (error ? " error" : "")}>
        <label htmlFor={id}>{formatHeader(name)}:</label>
        {type === "select" ? (
          <select id={id} name={name} value={value} onChange={onChange}>
            <option value="">Select</option>
            {options.map((option, i) => (
              <option value={option.id} key={"option-" + i}>
                {option.name}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type || "text"}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}

        <div className="error-message">{error}</div>
      </div>
    </>
  );
}
