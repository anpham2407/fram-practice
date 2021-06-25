import { useState, useEffect } from "react";
import "./index.css";
import Table from "../../components/table";
import { USER_LIST } from '../../constant'

function Practice() {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    fetch(USER_LIST)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          console.log("error", error);
        }
      );
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="practice-2">{data && <Table key={data.id} data={data} />}</div>
      </div>
    </div>
  );
}

export default Practice;
