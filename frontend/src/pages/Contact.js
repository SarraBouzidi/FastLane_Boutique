import React from 'react';
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/contactus.jpeg" alt="contactus" className="img-fluid" style={{ width: "92%" }} />
        </div>
        <div className="col-md-4 ">
          <h1 className="p-2 text-white text-center" style={{ backgroundColor: '#FCB041' }}>
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            Any query and information about products, feel free to call anytime; we're available 24/7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
