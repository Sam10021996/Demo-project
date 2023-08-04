export function HomePage()
{
    return( 
       <div>
       <section className="about-us">
            <h2>About Us</h2>
            <p>
            TechTalent Connect is a leading global recruitment startup specializing in connecting companies with exceptional tech talent. Whether you're a multinational corporation or a fast-growing startup, our platform enables you to find the best software engineers, product managers, data scientists, and other tech professionals to power your business growth.
            </p>
            {/* Add more details about the company here */}
        </section>
        <section className="why-choose-us">
            <h2>Why Choose TechTalent Connect?</h2>
            <ul>
            <li>Extensive Talent Pool</li>
            <li>Customized Solutions</li>
            <li>Efficient Hiring Process</li>
            <li>Verified Profiles</li>
            <li>Global Reach</li>
            </ul>
            {/* Add more details about the benefits of using your platform here */}
        </section>
        <section className="our-services">
            <h2>Our Services</h2>
            <ul>
            <li>Job Postings</li>
            <li>Candidate Search</li>
            <li>Application Management</li>
            <li>Candidate Screening</li>
            <li>Interview Scheduling</li>
            <li>Global Reach</li>
            </ul>
            {/* Add more details about each service */}
        </section>
        <section className="testimonials">
            <h2>Testimonials</h2>
            <blockquote>
            "TechTalent Connect has been instrumental in helping us find the best tech talent to support our rapid growth. The platform is easy to use, and the candidates we've hired through them have been outstanding." - John Doe, CEO, XYZ Tech Solutions.
            </blockquote>
            <blockquote>
            "As a startup, finding the right tech talent was a major challenge until we partnered with TechTalent Connect. Their personalized approach and extensive candidate database have been a game-changer for us." - Jane Smith, CTO, ABC Startup.
            </blockquote>
        </section>
        <section className="get-started">
            <h2>Get Started Today</h2>
            <p>Join TechTalent Connect today and experience a seamless hiring process that brings you closer to the tech professionals your company needs to succeed. Register now to unlock the full potential of your recruitment efforts!</p>
            {/* Add a CTA button to sign up */}
        </section>
        <section className="stay-connected">
            <h2>Stay Connected</h2>
            <p>Follow us on social media to stay up-to-date with the latest tech industry trends, hiring tips, and more.</p>
            {/* Add social media icons and links here */}
        </section>
        <section className="contact-us">
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Our dedicated support team is here to help. Reach out to us via email or phone.</p>
            <button className="contact-cta">Contact Us</button>
        </section>
        <section className="location">
            <h2>Location</h2>
            <p>TechTalent Connect HQ</p>
            <p>123, Tech Park Street,</p>
            <p>City, State, Country - XXXXXXX</p>
        </section>
        </div>
    );
};