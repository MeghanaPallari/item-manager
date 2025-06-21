import React, { useState } from 'react';

const AddItem = () => {
  const [item, setItem] = useState({
    name: '',
    type: '',
    description: '',
    cover: '',
    images: ''
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('items') || '[]');
    const newItem = {
      ...item,
      images: item.images.split(',').map(img => img.trim()),
      id: Date.now()
    };
    localStorage.setItem('items', JSON.stringify([...existing, newItem]));
    alert('✅ Item successfully added!');
    setItem({ name: '', type: '', description: '', cover: '', images: '' });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Item Name" value={item.name} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="type" placeholder="Item Type" value={item.type} onChange={handleChange} required className="w-full border p-2 rounded" />
        <textarea name="description" placeholder="Item Description" value={item.description} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="cover" placeholder="Cover Image URL" value={item.cover} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="images" placeholder="Additional Image URLs (comma separated)" value={item.images} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
