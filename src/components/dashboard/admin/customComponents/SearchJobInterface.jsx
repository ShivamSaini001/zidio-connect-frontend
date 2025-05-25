import React, { useState } from 'react';
import { ChevronDown, Search, Filter, X, Check } from 'lucide-react';
import { Divider } from '@mui/material';

export default function SearchJobInterface() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        status: [],
        role: [],
        department: [],
        dateRange: ''
    });

    const filterOptions = {
        status: ['Active', 'Inactive', 'Pending', 'Suspended'],
        role: ['Admin', 'Manager', 'Employee', 'Contractor', 'Guest'],
        department: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'],
        dateRange: ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last 6 months', 'Custom']
    };

    const handleFilterToggle = (category, value) => {
        setSelectedFilters(prev => {
            if (category === 'dateRange') {
                return {
                    ...prev,
                    dateRange: prev.dateRange === value ? '' : value
                };
            } else {
                const currentFilters = prev[category];
                const newFilters = currentFilters.includes(value)
                    ? currentFilters.filter(item => item !== value)
                    : [...currentFilters, value];

                return {
                    ...prev,
                    [category]: newFilters
                };
            }
        });
    };

    const clearAllFilters = () => {
        setSelectedFilters({
            status: [],
            role: [],
            department: [],
            dateRange: ''
        });
    };

    const getActiveFilterCount = () => {
        return selectedFilters.status.length +
            selectedFilters.role.length +
            selectedFilters.department.length +
            (selectedFilters.dateRange ? 1 : 0);
    };

    const hasActiveFilters = () => {
        return getActiveFilterCount() > 0;
    };

    const toggleFilterDropdown = () => {
        setFilterOpen(!filterOpen);
    };

    return (
        <div className="w-full p-1">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-stretch bg-gray-200/10 border rounded-lg shadow-md overflow-hidden relative">

                    {/* Search Input */}
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search users by name, email, or ID..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 ps-11 py-3 text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <Search size={16} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                        </div>
                    </div>

                   

                    {/* Enhanced Filter Button */}
                    <div className="relative z-20 border-l">
                        <button
                            onClick={toggleFilterDropdown}
                            className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors border-r ${hasActiveFilters()
                                ? 'text-blue-600 bg-blue-50 border-blue-200'
                                : 'text-gray-600 border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            <Filter size={16} />
                            <span className='text-white'>Filter</span>
                            {hasActiveFilters() && (
                                <span className="ml-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                                    {getActiveFilterCount()}
                                </span>
                            )}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${filterOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>

                </div>

                {/* Filter Dropdown Panel - Outside the main container */}
                {filterOpen && (
                    <div className="relative mt-2">
                        <div className="absolute top-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl w-80 max-h-96 overflow-y-auto z-50">
                            {/* Filter Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-900">Filter Users</h3>
                                {hasActiveFilters() && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>

                            {/* Status Filter */}
                            <div className="p-4 border-b border-gray-100">
                                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Status</h4>
                                <div className="space-y-2">
                                    {filterOptions.status.map((status) => (
                                        <label key={status} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                                            <button
                                                type="button"
                                                onClick={() => handleFilterToggle('status', status)}
                                                className="flex items-center w-full"
                                            >
                                                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center mr-3 ${selectedFilters.status.includes(status)
                                                    ? 'bg-blue-600 border-blue-600'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {selectedFilters.status.includes(status) && (
                                                        <Check size={10} className="text-white" />
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-700">{status}</span>
                                            </button>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Role Filter */}
                            <div className="p-4 border-b border-gray-100">
                                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Role</h4>
                                <div className="space-y-2">
                                    {filterOptions.role.map((role) => (
                                        <label key={role} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                                            <button
                                                type="button"
                                                onClick={() => handleFilterToggle('role', role)}
                                                className="flex items-center w-full"
                                            >
                                                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center mr-3 ${selectedFilters.role.includes(role)
                                                    ? 'bg-blue-600 border-blue-600'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {selectedFilters.role.includes(role) && (
                                                        <Check size={10} className="text-white" />
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-700">{role}</span>
                                            </button>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Department Filter */}
                            <div className="p-4 border-b border-gray-100">
                                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Department</h4>
                                <div className="space-y-2">
                                    {filterOptions.department.map((dept) => (
                                        <label key={dept} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                                            <button
                                                type="button"
                                                onClick={() => handleFilterToggle('department', dept)}
                                                className="flex items-center w-full"
                                            >
                                                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center mr-3 ${selectedFilters.department.includes(dept)
                                                    ? 'bg-blue-600 border-blue-600'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {selectedFilters.department.includes(dept) && (
                                                        <Check size={10} className="text-white" />
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-700">{dept}</span>
                                            </button>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Date Range Filter */}
                            <div className="p-4">
                                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Created Date</h4>
                                <div className="space-y-2">
                                    {filterOptions.dateRange.map((range) => (
                                        <label key={range} className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded">
                                            <button
                                                type="button"
                                                onClick={() => handleFilterToggle('dateRange', range)}
                                                className="flex items-center w-full"
                                            >
                                                <div className={`w-4 h-4 border-2 rounded-full flex items-center justify-center mr-3 ${selectedFilters.dateRange === range
                                                    ? 'bg-blue-600 border-blue-600'
                                                    : 'border-gray-300'
                                                    }`}>
                                                    {selectedFilters.dateRange === range && (
                                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                                    )}
                                                </div>
                                                <span className="text-sm text-gray-700">{range}</span>
                                            </button>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Click outside to close filter dropdown */}
            {filterOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setFilterOpen(false)}
                />
            )}
        </div>
    );
}