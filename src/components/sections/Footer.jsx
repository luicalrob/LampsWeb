import React from 'react';

export const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Google', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Behance', url: '#' },
        { name: 'Dribbble', url: '#' },
        { name: 'GitHub', url: '#' }
    ];

    return (
        <footer className="footer-section">
            <div className="row">
                <ul>
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.url}>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

