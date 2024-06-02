import React, { useEffect } from 'react';

interface PopupProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const Popup: React.FC<PopupProps> = ({ title, isOpen, onClose, onSend, status }) => {
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    if (status === 'succeeded' || status === 'failed') {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {status === 'loading' ? (
          <div className="flex justify-center items-center h-24 mb-4">
            <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
          <textarea
            className="w-full h-24 border border-gray-300 rounded p-2 mb-4"
            placeholder="Type here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === 'succeeded' || status === 'failed'}
          />
        )}
        {status === 'succeeded' && (
          <div className="text-green-500 mb-4">Message sent successfully!</div>
        )}
        {status === 'failed' && (
          <div className="text-red-500 mb-4">Failed to send the message.</div>
        )}
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
            disabled={status === 'loading'}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => onSend(message)}
            disabled={status === 'loading'}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
