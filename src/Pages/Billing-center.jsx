import './Billing-center.css'
import {Link} from "react-router-dom";

export default function InvoicesPage() {
    const invoices = [
        { date: "Jan 15, 2025", id: "INV-001", student: "Nancy Kabobo", description: "Premium Plan - Monthly", amount: "R99.00", status: "Paid" },
        { date: "Jan 15, 2025", id: "INV-002", student: "Nancy Kabobo", description: "Premium Plan - Monthly", amount: "R99.00", status: "Paid" },
        { date: "Jan 15, 2025", id: "INV-003", student: "Nancy Kabobo", description: "Premium Plan - Monthly", amount: "R99.00", status: "Paid" },
    ];

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <ul>
                    <li className="active">Payment Station
                        {/*<Link to="/BillingStation"></Link>*/}
                    </li>
                    <li>
                        <Link to="/Checkout">Make a Payment</Link>
                    </li>
                    <li>
                        <Link to="/SessionUsage">Session Usage</Link>
                    </li>
                    <li className="Invoice">
                        <Link to="/BillingStation">Invoice</Link>
                    </li>
                </ul>
            </aside>
            <main className="content">
                <h2>Invoices</h2>
                <div className="card">
                    <h3>Payment History</h3>
                    <table>
                        <tbody>
                        {invoices.map((inv, index) => (
                            <tr key={index}>
                                <td>{inv.date}</td>
                                <td>{inv.id}</td>
                                <td>{inv.student}</td>
                                <td>{inv.description}</td>
                                <td>{inv.amount}</td>
                                <td><span className="status paid">{inv.status}</span></td>
                                <td>
                                    <button className="download-btn">Download Invoice</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
