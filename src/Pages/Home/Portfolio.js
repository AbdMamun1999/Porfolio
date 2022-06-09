import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className='text-center text-white my-10 text-5xl font-bold'>Recent Works</h1>
            <div className='grid grid-cols-3 justify-items-center'>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title">SuperMax Tools(Full Stack)</h2>
                        <ul className='list-disc px-3 font-bold'>
                            <li>
                                <p>
                                    Users can sign up with Google or email and password.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Users can order a product and also can pay for this product.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The website has two types of functionalities for admin and users.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The admin can add a product and manage a product.The users can see their order page and
                                    review page.They will be able to review in the review route.
                                </p>
                            </li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Organic Store(Full Stack)</h2>
                        <ul className='list-disc px-3 font-bold'>
                            <li>
                                <p>
                                Implement login and signup method with Firebase authentication on the website.
                                </p>
                            </li>
                            <li>
                                <p>
                                If a user is a login,They add product quantity, delete a product and add a new product.
                                </p>
                            </li>
                            <li>
                                <p>
                                Create a 404 route. If users make a random route, they will go to the 404 page.
                                </p>
                            </li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">DentalCare(independent-service-provider)</h2>
                        <ul className='list-disc px-3 font-bold'>
                            <li>
                                <p>
                                A user can sign up with Google, GitHub and email and password.
                                </p>
                            </li>
                            <li>
                                <p>
                                A private protected route has been created for this project.
                                </p>
                            </li>
                            <li>
                                <p>
                                Responsiveness for mobile and Desktop.
                                </p>
                            </li>
                        </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;