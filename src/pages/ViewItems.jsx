import React, { useState } from 'react';
import { sendEnquiryEmail } from '../utils/emailService';

const ViewItems = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Running Shoes',
      type: 'Shoes',
      description: 'Comfortable and lightweight running shoes.',
      cover: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1528701800489-20be1d8ddc9a?auto=format&fit=crop&w=500&q=80'
      ]
    },
    {
      id: 2,
      name: 'Leather Handbag',
      type: 'Accessories',
      description: 'Elegant brown leather handbag for daily use.',
      cover: 'https://images-na.ssl-images-amazon.com/images/I/81E1+kRA7VL.jpg',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/81E1+kRA7VL.jpg',
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80'
      ]
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleEnquire = async (item) => {
    const success = await sendEnquiryEmail(item);
    if (success) alert("✅ Enquiry sent successfully!");
    else alert("❌ Failed to send enquiry email.");
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    setSelectedItem(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.cover} alt={item.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl font-bold"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="mb-2"><strong>Type:</strong> {selectedItem.type}</p>
            <p className="mb-4"><strong>Description:</strong> {selectedItem.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {selectedItem.images.map((img, idx) => (
                <img key={idx} src={img} alt={`Item ${idx}`} className="w-full h-32 object-cover rounded" />
              ))}
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => handleEnquire(selectedItem)}
              >
                Enquire
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => handleDelete(selectedItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewItems;
