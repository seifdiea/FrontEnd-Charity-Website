import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming this is the correct import for useFetch
import { saveAs } from 'file-saver';

const ViewToyDetails = () => {
    const { id } = useParams();
    const { data: toys, error, isPending } = useFetch('http://localhost:4000/toys/' + id);
    const navigate = useNavigate();


    return (
        <div className="toy-details bg-white shadow overflow-hidden sm:rounded-lg mx-4 my-4 p-4">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {toys && (
                <>
                <div className="bg-white overflow-hidden shadow rounded-lg border">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Toy Details
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Toy details.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {toys.name}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Age Range
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {toys.age_range}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Gender
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {toys.gender}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Category
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {toys.category}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    
                </div>
                <div className="buttons mt-4 px-4 py-5 sm:px-6">
               
                         <button onClick={''}
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105">Donate
                         </button>
                    </div>
                
                </>
                )}
     </div>
    )}
    


export default ViewToyDetails;
