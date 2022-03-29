import React from "react";
import "./Paginado.css"

export default function Paginado({ vgamesPerPage, allVgames, paginado }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(allVgames / vgamesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>

            <div class="bg-gray-600 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div class="flex-1 flex justify-between sm:hidden">

                    <div class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-8 py-2 border text-sm font-medium">
                        {pageNumbers && pageNumbers.map(number => (
                            <div>
                                <button class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={() => paginado(number)}>
                                    {number}
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">

                    <div>
                        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                            <div class="bg-gray-600  text-gray-500  relative inline-flex items-center px-4 py-2 text-sm font-medium">
                                {pageNumbers && pageNumbers.map(number => (
                                    <div>
                                        <button class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={() => paginado(number)}>
                                            {number}
                                        </button>
                                    </div>
                                ))}
                            </div>


                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}