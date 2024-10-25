import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/ui/pagination";
import { useState } from "react";

type Props = {
  templates: {
    current_page: number;
    last_page: number;
    prev_page_url: string | null;
    next_page_url: string | null;
    first_page_url: string;
    last_page_url: string;
  };
};

const PaginationComponent = ({ templates }: Props) => {
  const [currentPage, setCurrentPage] = useState(templates.current_page);

  const pagesPerChunk = 3;
  const totalChunks = Math.ceil(templates.last_page / pagesPerChunk);
  const currentChunk = Math.ceil(currentPage / pagesPerChunk);

  // Calculate start and end of current chunk
  const startPage = (currentChunk - 1) * pagesPerChunk + 1;
  const endPage = Math.min(startPage + pagesPerChunk - 1, templates.last_page);

  // Update page on click
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Trigger navigation logic if needed
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Conditionally render Previous button with margin-right */}
        <PaginationItem
          className={`${!templates.prev_page_url ? "disabled" : ""} mr-2`}
        >
          {templates.prev_page_url ? (
            <PaginationPrevious href={templates.prev_page_url} />
          ) : (
            <span>Previous</span>
          )}
        </PaginationItem>

        {/* Dynamically render page numbers for the current chunk */}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, index) => startPage + index
        ).map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href={`?page=${pageNumber}`}
              isActive={currentPage === pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={
                currentPage === pageNumber
                  ? "bg-primary text-white rounded"
                  : ""
              }
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis if there are more pages */}
        {endPage < templates.last_page && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Conditionally render Next button with margin-left */}
        <PaginationItem
          className={`${!templates.next_page_url ? "disabled" : ""} ml-2`}
        >
          {templates.next_page_url ? (
            <PaginationNext href={templates.next_page_url} />
          ) : (
            <span>Next</span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
