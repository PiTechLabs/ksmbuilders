import React from 'react'

const people = [
    { name: 'Ch Zulfiqar Ahmed SB.', contact: "0300-0100000" },
    { name: 'CAPT. SYED M. ABID QADRI SB.', contact: "0300-0100000" },
    { name: 'RAJA M. ALYAS SB. ', contact: "0300-0100000" },
    // More people...
]
export default function Partners() {
    return (
        <>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Partners</h1>
                </div>
            </div>
            <div className='mt-4'>
                <div className="mt-1 flex">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        
                    </div>
                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center space-x-2 rounded-md border border-themeBlue bg-themeBlue  px-4 py-2 text-sm font-medium text-white hover:scale-110 focus:border-themeBlue focus:outline-none focus:ring-1 focus:ring-themeBlue "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span>Add Partners</span>
                    </button>
                </div>
            </div>

            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 w-1/12">
                                Sr No.
                            </th>
                            <th
                                scope="col"
                                className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell w-1/3"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell w-1/3"
                            >
                                Phone No.
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 w-1/5">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 w-1/5">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {people.map((person) => (
                            <tr key={person.email}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    1
                                </td>
                                <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                    {person.name}
                                </td>
                                <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">
                                    {person.contact}
                                </td>
                                <a href="# ">
                                    <td className=" whitespace-nowrap px-3 py-4 text-smsm:table-cell text-themeBlue underline">
                                        View Expenses
                                    </td>
                                </a>
                                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <div class="flex dark:text-gray-100 text-gray-800 justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-themeBlue">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        &nbsp;&nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-themeRed">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
