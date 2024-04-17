export const generatePageNumbers = (currentPage, totalPages) => {
  const pagesToShow = 5;
  const pages = [];
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = startPage + pagesToShow - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (startPage > 1) {
    pages.unshift("...");
  }

  if (endPage < totalPages) {
    pages.push("...");
  }

  return pages;
};
