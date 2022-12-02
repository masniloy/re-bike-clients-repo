import React from 'react';

const Loader = () => {
    return (
        <div>
            <button type="button" class=" ..." disabled>
                <svg class="animate-spin h-10 w-10 mr-3 bg-indigo-500 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        </div>
    );
};

export default Loader;