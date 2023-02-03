import { Route, Routes, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import Page from "./Page";
import { useEffect, useState } from "react";

const totalPage = 884;

const Main = () => {
  const [currentNumber, setCurrentNumber] = useState(totalPage);

  return (
    <div>
      <Routes>
        <Route path="/page/:id" element={<Page setCurrentNumber={setCurrentNumber} />} />
      </Routes>
      <Pagination currentPage={currentNumber} setCurrentNumber={setCurrentNumber} />
    </div>
  );
};
export default Main;
