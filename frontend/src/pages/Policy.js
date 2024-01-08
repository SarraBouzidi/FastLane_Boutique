import React from 'react'
import Layout from '../components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.svg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="p-2 text-white text-center" style={{ backgroundColor: '#FCB041' }}>
            Privacy Policy          </h1>

          <p>FastLane ("us", "we", or "our") operates FastLane Boutique (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Service.
            We will not use or share your information with anyone except as described in this Privacy Policy.
            We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy