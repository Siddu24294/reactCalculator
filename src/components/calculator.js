import { useState } from "react";

export function TableGen() {
  const [op1, setop1] = useState(0);
  const [op2, setop2] = useState(0);
  const [op, setop] = useState(0);
  const [res, setres] = useState(0);

  function concat(arg) {
    if (arg in ["+", "-", "*", "/"]) {
      setop(arg);
    } else if (arg === "AC") {
      setop1(0);
      setop2(0);
      setop(0);
      setres(0);
    } else if (op === 0) {
      setop1(`${op1}${arg}`);
      if (res === 0) {
        setres(arg);
      } else {
        setres(`${res}${arg}`);
      }
    } else {
      setop2(`${op2}${arg}`);
      if (res === 0) {
        setres(arg);
      } else {
        setres(`${res}${arg}`);
      }
    }
    console.log(op1, op2, res);
  }

  return (
    <table>
      <tbody>
        <tr>
          <td key={"result"} colSpan={4}>
            {res}
          </td>
        </tr>

        {(() => {
          const rows = [];
          const ops = ["+", "-", "*", "AC", "=", "/"];
          for (let i = 1; i < 10; i += 3) {
            rows.push(
              <tr key={i / 3}>
                {((x, y) => {
                  const tds = [];
                  for (let j = x; j < y; j++) {
                    tds.push(
                      <td
                        key={j}
                        onClick={() => {
                          concat(j);
                        }}
                      >
                        {j}
                      </td>,
                    );
                  } /*
                  let opi = Math.floor(i / 3);
                  tds.push(
                    <td key={ops[opi]} onClick={() => concat(ops[opi])}>
                      {ops[opi]}
                    </td>,
                  );*/
                  return tds;
                })(i, i + 3)}
              </tr>,
            );
          }
          return rows;
        })()}

        <tr>
          <td
            key={0}
            onClick={() => {
              concat(0);
            }}
          >
            {0}
          </td>
          <td
            key={"AC"}
            onClick={() => {
              concat("AC");
            }}
          >
            AC
          </td>
          <td
            key={"="}
            onClick={() => {
              concat("=");
            }}
          >
            {"="}
          </td>
          <td
            key={"/"}
            onClick={() => {
              concat("/");
            }}
          >
            {"/"}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
