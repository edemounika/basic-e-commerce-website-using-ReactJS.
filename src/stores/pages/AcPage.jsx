import React, { useState } from 'react';
import { acData } from '../data/ac';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

// AcPage component displays a list of AC (air conditioner) products with filter options
const AcPage = () => {
    // State to store selected companies for filtering
    const [selectedProduct, setSelectedProduct] = useState([]);

    // Handle the selection of a company for filtering
    const companyHandler = (selectedCompany) => {
        if (selectedProduct.includes(selectedCompany)) {
            // If the company is already selected, remove it from the selection
            setSelectedProduct(selectedProduct.filter(item => item !== selectedCompany));
        } else {
            // If the company is not selected, add it to the selection
            setSelectedProduct([...selectedProduct, selectedCompany]);
        }
    }

    // Filter the products based on selected companies or display all products if none are selected
    const filteredProduct = selectedProduct.length === 0 ? acData : acData.filter((item) => selectedProduct.includes(item.company));

    return (
        <>
            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {filteredProduct.map((product) => {
                        return (
                            <div className='pro-input' key={product.company}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedProduct.includes(product.company)}
                                        onChange={() => companyHandler(product.company)}
                                    />
                                    {product.company}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProduct.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link to={`/ac/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {item.company}, {item.model}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default AcPage;
