import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-3xl font-bold mb-4">
            Welcome to OpenAgent
          </h1>
          <p className="text-lg">
            We've been around since 2013, and our vision is to make it easy for
            people to buy, sell and own property.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Here are the different ways you can contact us
        </h2>
        <div className="divider"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Contact Us Details</h3>
            <p>
              <strong>Phone:</strong> 13 24 34
            </p>
            <p>
              <strong>Email:</strong> Support@openagent.com.au
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Postal Address</h3>
            <p>PO BOX 419, Alexandria NSW 1435</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Contact Centre Hours</h3>
            <p>Monday-Friday 8:30 - 5:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
