import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "reactstrap"; // Using Reactstrap for styling (optional)

// Seller Dashboard Component
const SellerDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch seller dashboard data
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming JWT is stored in localStorage
        const response = await axios.get("bookings/dashboard/seller/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(response.data);
      } catch (err) {
        setError("Failed to load dashboard data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="seller-dashboard">
      <h1>Seller Dashboard</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>User Name</th>
            <th>Phone Number</th>
            <th>Booking Date</th>
            <th>Hotels</th>
            <th>Activities</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{booking.package_name}</td>
              <td>{booking.user_full_name}</td>
              <td>{booking.user_phone_number}</td>
              <td>{new Date(booking.booking_date).toLocaleString()}</td>
              <td>
                {booking.hotel_names.length > 0
                  ? booking.hotel_names.join(", ")
                  : "N/A"}
              </td>
              <td>
                {booking.activity_names.length > 0
                  ? booking.activity_names.join(", ")
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SellerDashboard;
