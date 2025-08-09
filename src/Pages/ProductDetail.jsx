import { useParams } from "react-router-dom";
import useAPI from "../useAPI"
import { useEffect } from "react";

export default function ProductDetail(){

    const {products, fetchAPI} = useAPI();
    const {id} = useParams();

    useEffect(() => {
        fetchAPI(id);
    },[id])

    return(<section className="py-5 px-3" style={{minHeight:'80vh'}}>
        {
            products && products.map((product) => {
                const {id,title,images,description,category,price,shippingInformation,warrantyInformation} = product;

                return(<section key={id} className="d-md-flex gap-3">
                    <div>
                        <img src={images} alt="" width={300} height={300}/>
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <p><span className="fw-bold">Category:</span> {category}</p>
                        <p>{description}</p>
                        <p><span className="fw-bold">$</span> {price}</p>
                        <p><span className="fw-bold">Warranty:</span> {warrantyInformation}</p>
                        <p><span className="fw-bold">Shipping:</span> {shippingInformation}</p>
                    </div>
                </section>)
            })
        }

        <section className="mt-5">
            <h2 className="text-info mb-3">Customer Reviews</h2>
            {
                products && products.map((product) => {
                    const {reviews} = product;
                    return(
                        reviews && reviews.map((review) => {
                            const {rating, comment, date, reviewerName} = review;

                            return(<div className="shadow p-3">
                                <p><i className="fa-regular fa-circle-user"></i>{reviewerName}</p>
                                <p>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i>
                                    <i class="text-warning fa-solid fa-star"></i> {rating}
                                </p>

                                <p>{new Date(date).toLocaleString("en-US")}</p>
                                <p>{comment}</p>
                            </div>)
                        })
                    )
                })
            }
        </section>
    </section>)
}