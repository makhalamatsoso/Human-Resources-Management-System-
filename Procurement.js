import React, { useState } from 'react';

const Procurement = () => {
  const [orders, setOrders] = useState([
    { id: 1, item: 'Laptop', quantity: 5, status: 'Pending' },
    { id: 2, item: 'Monitor', quantity: 10, status: 'Completed' },
  ]);

  const [newOrder, setNewOrder] = useState({
    item: '',
    quantity: '',
    status: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  // Handle input changes for new order or editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  // Create or Update Order
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === currentOrderId ? { ...order, ...newOrder } : order
        )
      );
      setIsEditing(false);
    } else {
      setOrders([...orders, { ...newOrder, id: orders.length + 1 }]);
    }
    setNewOrder({ item: '', quantity: '', status: '' });
  };

  // Delete Order
  const handleDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  // Start Editing Order
  const handleEdit = (id) => {
    const orderToEdit = orders.find((order) => order.id === id);
    setNewOrder(orderToEdit);
    setIsEditing(true);
    setCurrentOrderId(id);
  };

  return (
    <div className="procurement-container">
      <h2>Procurement Management</h2>

      <h3>{isEditing ? 'Edit Procurement Order' : 'Add New Procurement Order'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          placeholder="Item"
          value={newOrder.item}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newOrder.quantity}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={newOrder.status}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{isEditing ? 'Update Order' : 'Add Order'}</button>
      </form>

      <h3>Procurement Orders</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.item} - {order.quantity} - {order.status}
            <button onClick={() => handleEdit(order.id)}>Edit</button>
            <button onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Procurement;
