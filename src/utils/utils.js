import {
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { InputWithButton } from "@/app/components/ui/Input";

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

  if (endPage < totalPages) {
    pages.push("...");
  }

  return pages;
};

export const handleGoToPage = (
  inputPage,
  totalPages,
  setCurrentPage,
  setInputPage
) => {
  const pageNumber = parseInt(inputPage, 10);
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    setCurrentPage(pageNumber);
  }
  setInputPage("");
};

export const generatePaginationItems = (
  currentPage,
  totalPages,
  handlePageChange,
  inputPage,
  setInputPage,
  handleGoToPage,
  setCurrentPage
) => {
  const items = [];
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  items.push({
    key: "prev",
    component: (
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={() => {
            if (currentPage === 1) {
              return;
            } else {
              handlePageChange(currentPage - 1);
            }
          }}
        />
      </PaginationItem>
    ),
  });

  pageNumbers.forEach((pageNumber) => {
    pageNumber !== "..."
      ? items.push({
          key: pageNumber,
          component: (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                isActive={pageNumber === currentPage}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ),
        })
      : items.push({
          key: pageNumber,
          component: (
            <PaginationItem key={pageNumber}>
              <div className="pr-2">{pageNumber}</div>
            </PaginationItem>
          ),
        });
  });

  items.push({
    key: "input",
    component: (
      <PaginationItem>
        <div className="flex">
          <InputWithButton
            type="text"
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            placeholder={`Page (1 - ${totalPages})`}
            onSubmit={() =>
              handleGoToPage(
                inputPage,
                totalPages,
                setCurrentPage,
                setInputPage
              )
            }
          />
        </div>
      </PaginationItem>
    ),
  });

  items.push({
    key: "next",
    component: (
      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={() => {
            if (currentPage === totalPages) {
              return;
            } else {
              handlePageChange(currentPage + 1);
            }
          }}
        />
      </PaginationItem>
    ),
  });

  return items;
};

export function formatDate(fecha) {
  fecha.setHours(9, 0, 0, 0);

  let dia = ("0" + fecha.getDate()).slice(-2);
  let mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
  let año = fecha.getFullYear();
  let hora = ("0" + fecha.getHours()).slice(-2);
  let minutos = ("0" + fecha.getMinutes()).slice(-2);
  let segundos = ("0" + fecha.getSeconds()).slice(-2);

  let fechaFormateada = `${año}-${mes}-${dia}%20${hora}:${minutos}:${segundos}`;

  return fechaFormateada;
}
