"use client"

import React, { useState } from 'react';

interface OrderItem {
  productId: string;
  quantity: number;
}

interface OrderFormData {
  userId: string;
  items: OrderItem[];
  status: 'pending' | 'shipped' | 'delivered';
}

const OrderForm = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    userId: '',
    items: [{ productId: '', quantity: 1 }],
    status: 'pending'
  });

  // Handle input changes for each item
  const handleItemChange = (index: number, field: string, value: string | number) => {
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [field]: value };
    setFormData({ ...formData, items: newItems });
  };

  // Add a new item field
  const handleAddItem = () => {
    setFormData((prevState) => ({
      ...prevState,
      items: [...prevState.items, { productId: '', quantity: 1 }],
    }));
  };

  // Remove an item field
  const handleRemoveItem = (index: number) => {
    const newItems = [...formData.items];
    newItems.splice(index, 1);
    setFormData({ ...formData, items: newItems });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Create order:', formData);
    // You can call your API to create the order here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-xl font-semibold text-center text-blue-600">Create Order</h2>

      <div>
        <input
          name="userId"
          type="text"
          placeholder="User ID"
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.userId}
          onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
          required
        />
      </div>

      {/* Dynamically add/remove items */}
      {formData.items.map((item, index) => (
        <div key={index} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Product ID"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={item.productId}
              onChange={(e) => handleItemChange(index, 'productId', e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', Number(e.target.value))}
              required
            />
          </div>

          {/* Remove item button */}
          {formData.items.length > 1 && (
            <button
              type="button"
              className="text-red-500 hover:text-red-700"
              onClick={() => handleRemoveItem(index)}
            >
              Remove Item
            </button>
          )}
        </div>
      ))}

      {/* Button to add more items */}
      <button
        type="button"
        onClick={handleAddItem}
        className="text-blue-500 hover:text-blue-700"
      >
        Add Another Item
      </button>

      <div>
        <select
          name="status"
          className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as OrderFormData['status'] })}
        >
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Order
      </button>
    </form>
  );
};

export default OrderForm;
