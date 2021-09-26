import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            
            <h1>Brandy Mama</h1>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
            </nav>
        </div>
    );
};

export default Header;