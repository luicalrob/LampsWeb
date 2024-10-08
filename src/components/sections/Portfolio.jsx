import React, { useState } from 'react';
import portfolio1 from '../../assets/images/portfolio1.png';
import portfolio2 from '../../assets/images/portfolio2.png';
import portfolio3 from '../../assets/images/portfolio3.png';
import portfolio4 from '../../assets/images/portfolio4.png';

export function Portfolio() {
    const [filter, setFilter] = useState('all');

    const portfolioItems = [
        { id: 1, image: portfolio1, title: 'Isometric Perspective Mock-Up', categories: ['apps'] },
        { id: 2, image: portfolio2, title: 'Time Zone App UI', categories: ['web', 'apps'] },
        { id: 3, image: portfolio3, title: 'Viro Media Players UI', categories: ['icons'] },
        { id: 4, image: portfolio4, title: 'Blog / Magazine Flat UI Kit', categories: ['web', 'icons', 'apps'] },
    ];

    const filteredItems = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.categories.includes(filter));

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="row">
                <h2>Here is the portfolio</h2>
                <p className="little-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
                    consectetur, adipisci velit, sed quia non numquam</p>
            </div>
            <div className="row">
                <div className="portfolio-filter">
                    <button type="button" onClick={() => setFilter('all')} data-filter="all">All</button>
                    <button type="button" onClick={() => setFilter('web')} data-filter="web">Web</button>
                    <button type="button" onClick={() => setFilter('apps')} data-filter="apps">Apps</button>
                    <button type="button" onClick={() => setFilter('icons')} data-filter="icons">Icons</button>
                </div>
            </div>
            <div className="row container">
                {filteredItems.map(item => (
                    <div key={item.id} className={`col span_1_of_2 mix ${item.categories.join(' ')} box`}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className={`portfolio-image ${filteredItems.length > 0 ? 'visible' : ''}`} 
                        />
                        <h4>{item.title}</h4>
                    </div>
                ))}
            </div>
            <div className="row">
                <a href="#" className="btn btn-load-more">Load more projects</a>
            </div>
        </section>
    );
}
