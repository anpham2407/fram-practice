import { useState, useEffect } from "react";
import "./index.css";
import Table from "../../components/table";
import { Employee } from "../../services";

function Practice() {
  const [data, setData] = useState([] as any);

  useEffect(() => {
    const getEmployee = async () => {
      const res = await Employee.list();
      setData(res);
    };
    getEmployee();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="practice-2">
          {data && <Table key={data.id} data={data} />}
        </div>
      </div>
    </div>
  );
}

export default Practice;
