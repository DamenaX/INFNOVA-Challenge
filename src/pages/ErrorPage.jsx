import Button from '../components/Button';

function ErrorPage({ error, onRetry }) {
    return (
        <div className="w-full flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[50vh]">
            <div className="bg-red-50 text-red-500 rounded-full p-4 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>

            <h2 className="text-2xl text-text-primary mb-2">Oops! Something went wrong</h2>
            <p className="text-text-secondary mb-8 max-w-md">
                {error || "We couldn't load the information at this time. Please try again."}
            </p>

            {onRetry && (
                <div onClick={onRetry}>
                    <Button variant="default">Try Again</Button>
                </div>
            )}
        </div>
    );
}

export default ErrorPage;
