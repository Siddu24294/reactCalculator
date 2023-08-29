let sa;

export function RowGen({ x, y = 0, op }) {
  return (
    <tr>
      {(() => {
        const tds = [];
        for (let i = x; i <= y; i++) {
          tds.push(<td onClick={() => concat(i)}>{i}</td>);
        }
        tds.push(<td onClick={() => concat(op)}>{op}</td>);
        return tds;
      })()}
    </tr>
  );
}

export function TdGen({ number }) {
  return <td onClick={() => concat(number)}>{number}</td>;
}
function concat(x) {
  if (0 === 0) {
    setA(x);
  } else {
    setB(x);
  }
  setRes(Math.random() + 100);
}
