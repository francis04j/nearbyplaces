import React, { useState, useEffect } from 'react';
import { Search, Loader2, Globe, ChevronDown, ChevronUp, AlertCircle, ChevronLeft, ChevronRight, DollarSign } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useAccount } from '../contexts/AccountContext';
import { Link, useLocation } from 'react-router-dom';

interface AmenityResult {
  id: number;
  name: string;
  address: string;
  locality: string | null;
  amenityUrl: string;
  amenityType: string;
  distanceMiles: number;
}

interface ApiResponse {
  totalRecords: number;
  page: number;
  pageSize: number;
  totalPages: number;
  data: AmenityResult[];
}

interface ConfirmationDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ onConfirm, onCancel, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center mb-4 text-yellow-600">
          <DollarSign className="h-6 w-6 mr-2" />
          <h3 className="text-lg font-semibold">Charges Apply</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Viewing additional pages will incur charges of £0.059 per record and £0.099 per API call. Would you like to proceed?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

const PlaygroundPage = () => {
  const { currentUser } = useAuth();
  const { accountDetails } = useAccount();
  const location = useLocation();
  const [address, setAddress] = useState('');
  const [amenityType, setAmenityType] = useState('gym');
  const [amenities, setAmenities] = useState<AmenityResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [showAddressWarning, setShowAddressWarning] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingPageChange, setPendingPageChange] = useState<number | null>(null);
  const [pagination, setPagination] = useState({
    totalRecords: 0,
    page: 1,
    pageSize: 4,
    totalPages: 0
  });

  const amenityTypes = [
    { value: 'gym', label: 'Gyms' },
    { value: 'nursery', label: 'Nurseries' },
    { value: 'restaurant', label: 'Restaurants' },
    { value: 'park', label: 'Parks' }
  ];

  const fetchAmenities = async (type: string, page: number = 1) => {
    setLoading(true);
    setError(null);
    setExpandedRow(null);

    try {
      let url = `https://app-250213181732.azurewebsites.net/api/amenities/byType?type=${type}&page=${page}&pageSize=4`;
      
      if (address && accountDetails.hasPaymentMethod) {
        url = `https://app-250213181732.azurewebsites.net/api/amenities/${encodeURIComponent(address)}/${type}?page=${page}&pageSize=4`;
      }
      
      const response = await fetch(url, {
        headers: {
          'X-CLOSEBY-API-KEY': 'ApiKey-YOUR_SECRET_API_KEY'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      setAmenities(data.data);
      setPagination({
        totalRecords: data.totalRecords,
        page: data.page,
        pageSize: data.pageSize,
        totalPages: data.totalPages
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch amenities');
      setAmenities([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAmenities(amenityType);
  }, [amenityType]);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!accountDetails.hasPaymentMethod) {
      setShowAddressWarning(true);
      return;
    }
    setAddress(e.target.value);
  };

  const handleSearch = () => {
    if (address && !accountDetails.hasPaymentMethod) {
      setShowAddressWarning(true);
      return;
    }
    fetchAmenities(amenityType, 1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      if (newPage === 1) {
        fetchAmenities(amenityType, newPage);
      } else {
        setPendingPageChange(newPage);
        setShowConfirmation(true);
      }
    }
  };

  const handleConfirmPageChange = () => {
    if (pendingPageChange !== null) {
      fetchAmenities(amenityType, pendingPageChange);
      setShowConfirmation(false);
      setPendingPageChange(null);
    }
  };

  const handleCancelPageChange = () => {
    setShowConfirmation(false);
    setPendingPageChange(null);
  };

  const renderPaginationControls = () => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, pagination.page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pagination.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    return (
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => handlePageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing page <span className="font-medium">{pagination.page}</span> of{' '}
              <span className="font-medium">{pagination.totalPages}</span> ({pagination.totalRecords} total records)
            </p>
          </div>
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              
              {startPage > 1 && (
                <>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    1
                  </button>
                  {startPage > 2 && (
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                      ...
                    </span>
                  )}
                </>
              )}

              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    page === pagination.page
                      ? 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  }`}
                >
                  {page}
                </button>
              ))}

              {endPage < pagination.totalPages && (
                <>
                  {endPage < pagination.totalPages - 1 && (
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                      ...
                    </span>
                  )}
                  <button
                    onClick={() => handlePageChange(pagination.totalPages)}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {pagination.totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">API Playground</h1>
          <p className="mt-2 text-lg text-gray-600">
            Test the Amenities API with different types of locations
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="amenityType" className="block text-sm font-medium text-gray-700 mb-1">
                Select Amenity Type
              </label>
              <select
                id="amenityType"
                value={amenityType}
                onChange={(e) => setAmenityType(e.target.value)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                {amenityTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Enter Address
                </label>
                {!accountDetails.hasPaymentMethod && (
                  <Link 
                    to="/account" 
                    state={{ from: location.pathname }}
                    className="text-sm text-yellow-600 hover:text-yellow-700 flex items-center"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Complete your profile to search by address
                  </Link>
                )}
              </div>
              <div className="relative">
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Enter an address..."
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                      !accountDetails.hasPaymentMethod ? 'bg-gray-100 cursor-not-allowed' : ''
                    }`}
                    disabled={!accountDetails.hasPaymentMethod}
                  />
                </div>
                {showAddressWarning && !accountDetails.hasPaymentMethod && (
                  <div className="absolute mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md w-full">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
                      <p className="text-sm text-yellow-700">
                        Please add your payment details in your{' '}
                        <Link 
                          to="/account" 
                          state={{ from: location.pathname }}
                          className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                          account settings
                        </Link>{' '}
                        to use the search feature.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleSearch}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Loading...
                  </>
                ) : (
                  <>
                    <Search className="-ml-1 mr-2 h-4 w-4" />
                    Search
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {error ? (
            <div className="p-4 text-red-700 bg-red-50 border-l-4 border-red-500">
              <p className="font-medium">Error</p>
              <p className="mt-1">{error}</p>
            </div>
          ) : loading ? (
            <div className="p-8 text-center">
              <Loader2 className="animate-spin h-8 w-8 text-indigo-600 mx-auto" />
              <p className="mt-2 text-gray-600">Loading amenities...</p>
            </div>
          ) : amenities.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No amenities found
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      {address && accountDetails.hasPaymentMethod && (
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Distance
                        </th>
                      )}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {amenities.map((amenity) => (
                      <React.Fragment key={amenity.id}>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{amenity.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{amenity.address}</div>
                            {amenity.locality && (
                              <div className="text-sm text-gray-500">{amenity.locality}</div>
                            )}
                          </td>
                          {address && accountDetails.hasPaymentMethod && (
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {amenity.distanceMiles.toFixed(2)} miles
                              </div>
                            </td>
                          )}
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex items-center space-x-4">
                              <a
                                href={amenity.amenityUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-900 flex items-center"
                              >
                                <Globe className="h-4 w-4 mr-1" />
                                View on Maps
                              </a>
                              <button
                                onClick={() => toggleRow(amenity.id)}
                                className="text-indigo-600 hover:text-indigo-900 flex items-center"
                              >
                                {expandedRow === amenity.id ? (
                                  <ChevronUp className="h-4 w-4 mr-1" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 mr-1" />
                                )}
                                {expandedRow === amenity.id ? 'Hide JSON' : 'View JSON'}
                              </button>
                            </div>
                          </td>
                        </tr>
                        {expandedRow === amenity.id && (
                          <tr>
                            <td colSpan={address && accountDetails.hasPaymentMethod ? 4 : 3} className="px-6 py-4 bg-gray-50">
                              <pre className="text-sm text-gray-700 overflow-x-auto">
                                {JSON.stringify(amenity, null, 2)}
                              </pre>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              {renderPaginationControls()}
            </>
          )}
        </div>

        {/* Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={showConfirmation}
          onConfirm={handleConfirmPageChange}
          onCancel={handleCancelPageChange}
        />
      </div>
    </div>
  );
};

export default PlaygroundPage;