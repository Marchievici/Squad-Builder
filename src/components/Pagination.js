import React from "react";
import Button from "./Button";

const Pagination = ({
  pageTotal,
  currentPage = 1,
  setCurrentPage,
  className,
}) => {
  const handlePrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage((curr) => curr - 1);
  };

  const handleNext = () => {
    if (currentPage === pageTotal) return;
    setCurrentPage((curr) => curr + 1);
  };

  return (
    <div className={className}>
      <Button onClick={() => setCurrentPage(1)}>⏪</Button>
      <Button onClick={handlePrevious}>←</Button>
      <p>{`Page ${currentPage} of ${pageTotal}`}</p>
      <Button onClick={handleNext}>→</Button>
      <Button onClick={() => setCurrentPage(pageTotal)}>⏩</Button>
    </div>
  );
};

export default Pagination;
