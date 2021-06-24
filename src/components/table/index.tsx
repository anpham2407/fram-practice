import React, { useState, useMemo } from "react";
import "./index.css";
import { Pagination } from "./../../components/paging";
const alignIcon = "../../assets/icons/left-align.svg";
const plusIcon = "../../assets/icons/plus.svg";

export interface Props {
  data: any;
}

const getData = (data: [], page: any) => {
  const newData: string[] = [];
  if (data.length > 0) {
    for (let i = page; i < page + 5; i++) {
      newData.push(data[i - 1]);
    }
  }
  return newData;
};
const Table: React.FC<Props> = ({ data }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.round(data.length / 5);
  const handlePages = (updatePage: number) => setPage(updatePage);
  const dataPaging = useMemo(() => getData(data, page), [data, page]);
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row table-row-head">
          <th className="table-cell table-cell-head" scope="col">
            <i className="icon">Aa</i>
            <span>Name</span>
          </th>
          <th className="table-cell table-cell-head" scope="col">
            <i className="icon">@</i>
            Email
          </th>
          <th className="table-cell table-cell-head" scope="col">
            <i className="icon svg">
              <img alt="" src={alignIcon} />
            </i>
            Position
          </th>
        </tr>
      </thead>
      {dataPaging?.map((item: any) => (
        <tbody className="table-body">
          <tr className="table-row">
            <td className="table-cell">{item?.name || ""}</td>
            <td className="table-cell">{item?.email || ""}</td>
            <td className="table-cell">{item?.position || ""}</td>
          </tr>
        </tbody>
      ))}
      <tfoot className="table-footer">
        <tr className="table-row table-row-footer">
          <td className="table-cell table-cell-footer" colSpan={3}>
            <div className="row">
              <div className="add-new">
                <i className="icon svg">
                  <img alt="" src={plusIcon} />
                </i>
                <span>New</span>
              </div>
              <div className="table-paging">
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  handlePagination={handlePages}
                />
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default React.memo(Table);
