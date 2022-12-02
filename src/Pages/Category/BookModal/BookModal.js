import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookModal = ({ booking, setBookingProduct }) => {
    const { product_name, resale_price } = booking;
    const { user } = useContext(AuthContext);

    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const productName = form.product_name.value;
        const price = form.resale_price.value;
        const location = form.location.value;
        const buyerPhone = form.phone.value;


        const booking = {
            buyerName, buyerEmail, productName, price, location, buyerPhone
        }
        console.log(booking)


        fetch('https://re-bike.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookingProduct(null);
                    toast.success('Booking process complete')
                }
            });
    };

    return (
        <>
            <input type="checkbox" id="bookModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Complete The Booking Process</h3>
                    <form onSubmit={handelBooking}>
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder='Your name' className="m-1 input input-bordered input-success w-full " />
                        <input name='email' type="text" disabled defaultValue={user?.email} placeholder='Your email' className="m-1 input input-bordered input-success w-full " />
                        <input name='product_name' type="text" disabled value={product_name} className="m-1 input input-bordered input-success w-full " />
                        <input name='resale_price' type="text" disabled value={resale_price} className="m-1 input input-bordered input-success w-full" />
                        <input name='phone' type="phone" required placeholder='phone' className="m-1 input input-bordered input-success w-full" />
                        <input name='location' type="text" required placeholder='meeting location' className="m-1 input input-bordered input-success w-full" />
                        <br /><br />
                        <input type="submit" className=" m-1 btn w-full" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;