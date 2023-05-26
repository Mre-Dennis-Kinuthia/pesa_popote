import Layout from '@/app/layout'
import React from 'react'

export default function ContactUs(){
    return(
        <Layout>
            <main className="container">
                <h1>Contact Us</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-control" />
                    </div>
                </form>
            </main>
        </Layout>
    )
}