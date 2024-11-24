import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/config';

const SellerDashboard = () => {
   const [sellerData, setSellerData] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (!token) {
         navigate('/login'); // Redirect to login if no token
         return;
      }

      const fetchSellerData = async () => {
         try {
            const res = await fetch(`${BASE_URL}/bookings/seller-dashboard/`, {
               method: 'GET',
               headers: {
                  'Authorization': `Bearer ${token}`
               }
            });
            const data = await res.json();
            if (res.ok) {
               setSellerData(data);
            } else {
               alert('Failed to fetch seller data');
            }
         } catch (err) {
            console.error(err);
            alert('An error occurred while fetching seller data.');
         }
      };

      fetchSellerData();
   }, [navigate]);

   return (
      <section>
         <Container>
            <Row>
               <Col lg="12">
                  <h2>Seller Dashboard</h2>
                  {sellerData ? (
                     <div>
                        <h3>Welcome, {sellerData.name}</h3>
                        {/* Display seller-specific info, such as their products */}
                        <Button>Manage Listings</Button>
                        <Button>View Orders</Button>
                     </div>
                  ) : (
                     <p>Loading seller data...</p>
                  )}
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default SellerDashboard;
