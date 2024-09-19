import React from "react";

/**
 * ModalProps: Interface for the props passed to the Modal component.
 * - isOpen: boolean (Determines whether the modal is visible or not).
 * - onClose: function (Callback function to close the modal).
 * - children: React.ReactNode (Content to be rendered inside the modal).
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
/**
 * Modal: A functional component for rendering a modal dialog.
 * 
 * @param {ModalProps} props - Props include isOpen, onClose, and children.
 * 
 * Functionality:
 * 1. The modal only renders if `isOpen` is true. If false, the component returns null.
 * 2. Renders a dark overlay using `fixed`, `inset-0`, and `bg-opacity-50` classes to darken the background when the modal is open.
 * 3. Displays modal content in a centered box with a max-width of 3XL on larger screens.
 * 4. A close button is positioned at the top-right corner of the modal, calling the `onClose` function when clicked.
 * 5. The modal content is scrollable vertically if it exceeds the viewport height, with a maximum height of 90% of the viewport.
 */

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Do not render the modal if it's not open.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full h-screen md:h-auto max-w-3xl bg-white rounded-lg shadow-lg p-6">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="bg-white rounded-lg shadow-lg w-full h-full max-h-[90vh] overflow-y-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};
// Export the `Modal` component for use in other parts of the application
export default Modal;
