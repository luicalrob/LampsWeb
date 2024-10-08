import React from 'react';
import kate from '../../assets/images/1.jpg';
import olivia from '../../assets/images/2.jpg';
import ashley from '../../assets/images/3.jpg';
import anne from '../../assets/images/4.jpg';


const testimonials = [
    {
        name: "Chanel Iman",
        role: "Ceo of Pinterest",
        review: "“Nullam dapibus blandit orci, viverra gravida dui lobortis eget. Maecenas fringilla urna eu nisl scelerisque.”",
        image: kate,
        alt: "Chanel Iman"
    },
    {
        name: "ADRIANA LIMA",
        role: "Founder of Instagram",
        review: "“Vivamus luctus luctus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.”",
        image: olivia,
        alt: "ADRIANA LIMA"
    },
    {
        name: "ANNE HATHAWAY",
        role: "Lead Designer at Behance",
        review: "“Vivamus luctus urna sed urna luctus luctus ultricies ac tempor dui sagittis. In condimentum facilisis porta.”",
        image: ashley,
        alt: "ANNE HATHAWAY"
    },
    {
        name: "EMMA STONE",
        role: "Co-Founder of Shazam",
        review: "“Phasellus non purus vel arcu tempor commodo. Fusce semper, purus vel luctus molestie, risus sem cursus.”",
        image: anne,
        alt: "EMMA STONE"
    }
];

export const Testimonials = () => {
    return (
        <section className="testimonial-section" id="testimonial">
            <div className="row">
                <h2>What People Say About Us</h2>
                <p className="little-description">Our clients love us!</p>
            </div>
            <div className="row">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="col span_1_of_2 box">
                        <div className="client-photo">
                            <img src={testimonial.image} alt={testimonial.alt} />
                        </div>
                        <div className="client-review">
                            <p>{testimonial.review}</p>
                            <h3>{testimonial.name}</h3>
                            <span className="role">{testimonial.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

