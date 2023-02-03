import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Page = ({setCurrentNumber}) => {
  const pageNumber = useParams();

  useEffect(() => {
    setCurrentNumber(pageNumber.id);
    console.log("Effect work");
  }, []);

  console.log("Page ID is: ==> ", pageNumber.id);
  return (
    <div>
      <h1>Page Number: {pageNumber.id}</h1>
    </div>
  );
};
export default Page;
