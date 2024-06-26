

const BackToHome = () => {
    return (
        <a href="/" className="flex items-center justify-start text-blue-500 hover:text-blue-700 py-4">
            <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                />
            </svg>
            Back
        </a>
    );
};

export default BackToHome;