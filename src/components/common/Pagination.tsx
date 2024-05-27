import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    paginate,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        paginate(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers: React.ReactNode[] = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i}>
                    <button
                        type="button"
                        className={`flex justify-center font-semibold px-3.5 py-2 rounded transition ${currentPage === i
                                ? "bg-blue-500 text-white dark:text-white-light dark:bg-blue-500"
                                : "hover:text-white hover:bg-blue-500"
                            }`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="flex mt-10 items-center justify-center text-slate-500 font-light">
            <ul className="inline-flex mx-auto items-center space-x-1 rtl:space-x-reverse">
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition hover:text-white hover:bg-blue-500"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <MdArrowBackIos />
                    </button>
                </li>
                {renderPageNumbers()}
                <li>
                    <button
                        type="button"
                        className="flex justify-center font-semibold px-3.5 py-2 rounded transition hover:text-white hover:bg-blue-500"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <MdArrowForwardIos />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;