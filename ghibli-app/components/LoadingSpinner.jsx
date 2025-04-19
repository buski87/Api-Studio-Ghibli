export default function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-400 border-opacity-75"></div>
      </div>
    );
  }
  