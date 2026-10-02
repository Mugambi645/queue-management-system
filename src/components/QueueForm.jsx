import React from 'react'
import { useState } from "react";
import {FaUserPlus} from "react-icons/fa";

const QueueForm = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !service.trim()) return;
        onAdd({ name, service });
        setName("");
        setService("");

    }
  return (
    <div>QueueForm
    <form onSubmit={handleSubmit}>
        <h>Add to Queue</h>
        <div className="form-group">
            <input placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" />

        </div>
        <div className="form-group">
            <select value={service} 
            onChange={(e) => setService(e.target.value)}>
                <option value="">Select Service</option>
                <option value="consultation">Consultation</option>
                <option value="payment">Payment</option>
                <option value="support">Support</option>
            </select>
        </div>
        <button type="submit">
            <FaUserPlus /> Add Customer</button>
    </form>
    </div>
  )
}

export default QueueForm