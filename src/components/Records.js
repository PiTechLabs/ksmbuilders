import React from 'react'

export default function Records() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Title</h1>
            </div>
            <div className='mt-4'>
                <div className="mt-1 flex text-left">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <div>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                                    Total Amount
                                </span>
                                <input
                                    type="text"
                                    name="company-website"
                                    id="company-website"
                                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Asad bhosrika"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="relative -ml-px inline-flex items-center space-x-2 rounded-md border border-themeBlue bg-themeBlue  px-4 py-2 text-sm font-medium text-white hover:scale-110 focus:border-themeBlue focus:outline-none focus:ring-1 focus:ring-themeBlue "
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Add Record</span>
                    </button>
                </div>
            </div>

            <div className='mt-4'>
                <table className="w-full shadow text-center bg-white">
                    <thead>
                        <tr className="border border-gray-300  ">
                            <th className="py-5 w-1/12 text-base text-gray-800">Date</th>
                            <th className="py-5 w-1/12 text-base text-gray-800">Month</th>
                            <th className="py-5 w-1/12 text-base text-gray-800">Year</th>
                            <th className="py-5 w-1/12 text-base text-gray-800">Amount</th>
                            <th className="py-5 w-1/2 text-base text-gray-800 text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td className="py-5">26</td>
                            <td className="py-5">7</td>
                            <td className="py-5">2022</td>
                            <td className="py-5 text-green-600">227000</td>
                            <td className="py-5 text-left">13-BAKRAY FROM M. AFZAL</td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="py-5">26</td>
                            <td className="py-5">7</td>
                            <td className="py-5">2022</td>
                            <td className="py-5 text-green-600">16000</td>
                            <td className="py-5 text-left">1-BAKRAY FROM M. ARIF</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}
