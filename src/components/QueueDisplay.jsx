
import React from 'react';

const QueueDisplay = ({ queue, onUpdateStatus, onRemove }) => {
    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "waiting":
                return "status-badge status-waiting";
            case "in-progress":
                return "status-badge status-in-progress";
            case "completed":
                return "status-badge status-completed";
            default:
                return "status-badge";
        }
    };

    return (
        <div className="queue-display">
            <h2>Current Queue ({queue.length})</h2>
            {queue.length === 0 ? (
                <p className="empty-queue">No customers in line.</p>
            ) : (
                <div className="queue-list">
                    {queue.map((customer) => (
                        <div key={customer.id} className="queue-item">
                            <div className="customer-info">
                                <span className="customer-name">{customer.name}</span>
                                <span className="customer-service">{customer.service}</span>
                            </div>
                            
                            <span className={getStatusBadgeClass(customer.status)}>
                                {customer.status}
                            </span>

                            <div className="actions">
                                {customer.status === "waiting" && (
                                    <button
                                        className="btn btn-serve"
                                        onClick={() => onUpdateStatus(customer.id, "in-progress")}
                                    >
                                        Serve
                                    </button>
                                )}
                                {/* FIXED: Changed 'serving' to 'in-progress' */}
                                {customer.status === "in-progress" && (
                                    <button
                                        className="btn btn-complete"
                                        onClick={() => onUpdateStatus(customer.id, "completed")}
                                    >
                                        Complete
                                    </button>
                                )}
                                
                                <button
                                    className="btn btn-remove"
                                    onClick={() => onRemove(customer.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default QueueDisplay;