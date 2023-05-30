import Layout from '@/app/LandingPageLayout';
import React from 'react';
import './contact.css';

export default function ContactUs() {
    return (
        <Layout>
            <main>
                <div className="contact">
                    <form>
                        <label className="label">Name</label><br />
                        <input type="text" className="input" />
                        <br />
                        <label className="label">Name</label><br />
                        <input type="text" className="input" /><br />
                        <label className="label">Company</label><br />
                        <input type="text" className="input" />
                        <br />
                        <label className="label">Phone</label><br />
                        <input type="text" className="input" />
                        <br />
                        <label className="label">Email</label><br />
                        <input type="email" className="input" />
                        <br />


                        <label className="label">Message</label><br />
                        <textarea className="input" rows="5"></textarea>
                        <br />

                        <button className="button">Submit</button>
                    </form>
                </div>
            </main>
        </Layout>
    );
}
