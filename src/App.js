import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
//import { TableGen } from "./components/calculator";

const TableGen = () => {
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [op, setOp] = useState(0);
  const [res, setRes] = useState(0);

  const calculate = () => {
    let a = 0;
    let ers = 0;
    op === "+"
      ? (a = op1 + op2)
      : op === "-"
      ? (a = op1 - op2)
      : op === "*"
      ? (a = op1 * op2)
      : op === "/"
      ? op2 == 0
        ? (ers = 1)
        : (a = op1 / op2)
      : (ers = 1);

    if (ers === 0) {
      setOp1(a);
      setOp2(0);
      setOp(0);
      setRes(a);
    } else if (ers === 1) {
      setRes("Zero Division Error");
      ers = 0;
    } else if (ers === 2) {
      setRes("No op");
      ers = 0;
      ``;
    }
  };

  function concat(arg) {
    if (["+", "-", "*", "/"].includes(arg)) {
      if (op === 0) {
        setOp(arg);
        setRes(`${res}${arg}`);
      } else {
        calculate();
        setRes(`${res}${op}`);
      }
    } else if (arg === "AC") {
      setOp(0);
      setOp1(0);
      setOp2(0);
      setRes(0);
    } else if (op === 0) {
      setRes(`${op1}${arg}`);
      setOp1(op1 !== 0 ? Number(`${op1}${arg}`) : Number(`${arg}`));
      console.log("op1:", op1 !== 0 ? `${op1}${arg}` : `${arg}`);
    } else {
      setRes(`${res}${arg}`);
      setOp2(op2 !== 0 ? Number(`${op2}${arg}`) : Number(`${arg}`));
      console.log("op2:", op2 !== 0 ? `${op2}${arg}` : `${arg}`);
    }
    console.log(arg);
  }
  return (
    <table>
      <tbody>
        <tr>
          <td key={"res"} colSpan={4}>
            {res}
          </td>
        </tr>
        {(() => {
          const rows = [];
          const operators = ["+", "-", "*"];
          for (let row = 1; row < 10; row += 3) {
            let rowindex = Math.floor(row / 3);
            rows.push(
              <tr key={rowindex}>
                {(() => {
                  const cells = [];
                  for (let cell = row; cell < row + 3; cell++) {
                    cells.push(
                      <td key={cell} onClick={() => concat(cell)}>
                        {cell}
                      </td>,
                    );
                  }
                  let operator = operators[rowindex];
                  cells.push(
                    <td key={operator} onClick={() => concat(operator)}>
                      {operator}
                    </td>,
                  );
                  return cells;
                })()}
              </tr>,
            );
          }
          return rows;
        })()}
        <tr key={3}>
          <td key={0} onClick={() => concat(0)}>
            {0}
          </td>
          <td key={"AC"} onClick={() => concat("AC")}>
            {"AC"}
          </td>
          <td key={"="} onClick={() => calculate()}>
            {"="}
          </td>
          <td key={"/"} onClick={() => concat("/")}>
            {"/"}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TableGen />
      </header>
    </div>
  );
}

export default App;

/*

function MyButton() {
  const [va, setVar] = useState("this is a para");

  function clickh() {
    setVar(typeof va == "string" ? 0 : va + 1);
  }

  function resetfn() {
    setVar("this is a para");
  }

  return (
    <p onClick={clickh} onDoubleClick={resetfn}>
      {va}
    </p>
  );
}
*/
