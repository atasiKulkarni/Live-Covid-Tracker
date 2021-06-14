import React from 'react'
import './header.css';
import {BsCircleFill} from 'react-icons/bs';

export function Header() 
{
    
    return (
        <div className="header-content fs-6">
            <div className="d-flex align-items-center justify-content-center mt-4 zoom-text">
                <div className="red-dot"><BsCircleFill /></div>
                <div className="ms-2 live-update">LIVE</div>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-3 mt-3 header-title">
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            </div>
        </div>
    )
}
