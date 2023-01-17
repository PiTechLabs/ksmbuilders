import React from 'react'

export default function AddPartners() {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900 text-center">Add New Partner</h1>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    First Name
                </label>
                <div className="mt-1">
                    <input
                        id="detail"
                        name="detail"
                        type="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Last Name
                </label>
                <div className="mt-1">
                    <input
                        id="Amount"
                        name="Amount"
                        type="number"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Contact
                </label>
                <div className="mt-1">
                    <input
                        id="Amount"
                        name="Amount"
                        type="number"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    UserName
                </label>
                <div className="mt-1">
                    <input
                        id="Amount"
                        name="Amount"
                        type="number"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Password
                </label>
                <div className="mt-1">
                    <input
                        id="Amount"
                        name="Amount"
                        type="password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <label className="block font-medium text-gray-700 text-lg my-2">
                    Confirm Password
                </label>
                <div className="mt-1">
                    <input
                        id="Amount"
                        name="Amount"
                        type="password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="button"
                    className="my-4 inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-themeBlue hover:bg-themeBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-themeBlue hover:scale-110"                >
                    Add Partner
                </button>
            </div>

        </>
    );
}
