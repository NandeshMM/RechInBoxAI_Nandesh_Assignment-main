interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

function DeletePopUp({ onCancel, onDelete }: Props) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-lg flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white">Are you sure?</h2>
        <p className="text-sm text-white text-center my-12 mx-16">
          Are you sure you want to delete this mail?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-700 text-white py-4 px-16 rounded-md cursor-pointer outline-none"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-gradient-to-r from-red-500 to-red-800 text-white py-4 px-16 rounded-md cursor-pointer outline-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
