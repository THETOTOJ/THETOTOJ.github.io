import React, { useRef, useEffect } from 'react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  avatarUrl: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, username, avatarUrl }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-black  rounded-lg shadow-lg p-6 w-96 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>
        <div className="flex flex-col items-center">
          <img src={avatarUrl} alt={`${username}'s avatar`} className="w-20 h-20 rounded-full mb-4" />
          <h2 className="text-2xl font-bold mb-2">{username}</h2>
          {/* You can add more profile information here */}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
