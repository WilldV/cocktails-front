import { Link } from "react-router-dom";
import { formatHeader, formatValue } from "../utils";
import ActionTD from "./ActionTD";

export default function Table({
  format,
  name,
  pathName,
  deleteFunction,
  elements,
}) {
  const keys = Object.keys(format || {});

  return (
    <>
      <h3>{name}</h3>
      <Link to={`/${pathName}/create`}>
        <button>Crear</button>
      </Link>

      <table>
        <thead>
          <tr>
            {keys.map((key, i) => (
              <th key={"th-" + i}>{formatHeader(key)}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element, i) => {
            return (
              <tr key={"tr-" + i}>
                {keys.map((key, j) => {
                  const value = formatValue(element, key, format);
                  return <td key={"td-" + j}>{value}</td>;
                })}
                <ActionTD
                  pathName={pathName}
                  element={element}
                  deleteFunction={deleteFunction}
                ></ActionTD>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
