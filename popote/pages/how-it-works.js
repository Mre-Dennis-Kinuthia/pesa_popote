import React from 'react';
import './pages.css';
import '@/app/styles/styles.css';
import Layout from '@/app/LandingPageLayout';
import { metadata } from '@/app/metadata';
import { RiMoneyDollarCircleLine, RiSendPlaneLine, RiTimeLine } from 'react-icons/ri';

export default function HowItWorks() {
  return (
    <Layout>
      <main className="container">
        <h1 className="text-card text-2xl md:text-3xl font-bold mb-8 ml-2/12">How Popote Works</h1>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 mx-4 mt-20">
            <RiMoneyDollarCircleLine className="text-6xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">Manage Your Finances</h2>
            <p className="text-gray-600 text-center">
              With Popote, you can effortlessly manage your finances, keep track of your income and expenses,
              and gain valuable insights into your financial health.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 mx-4 mt-20">
            <RiSendPlaneLine className="text-6xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">Send and Receive Payments</h2>
            <p className="text-gray-600 text-center">
              Popote allows you to securely send and receive payments from anywhere in the world. Say goodbye
              to traditional payment methods and embrace a seamless digital experience.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 mx-4 mt-20">
            <RiTimeLine className="text-6xl text-blue-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-center">Track Transaction History</h2>
            <p className="text-gray-600 text-center">
              Stay on top of your transaction history with Popote. Easily view and search your past transactions,
              monitor your financial activity, and maintain a clear overview of your payment history.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
