import React from "react";
import Container from "../Shared/Container/Container";

const Terms = () => {
  return (
    <div className="pt-20">
      <Container>
        <h1 className="text-4xl text-center my-10">Terms of Service</h1>
        <div className=" p-5">
          <p className="text-xl">
            Welcome to BIOMED. By using or accessing our platform, you agree to
            comply with and be bound by the following terms and conditions .
            Please read these Terms carefully before using the Website. If you
            do not agree with these Terms, please do not access or use the
            Website.The content and materials available on the Website,
            including but not limited to text, graphics, logos, images, audio
            clips, and software, are the property of BIOMED or its licensors and
            are protected by intellectual property laws. You may not reproduce,
            distribute, modify, create derivative works of, publicly display, or
            exploit any of the content without our prior written consent.
          </p>

          <div className="text-xl my-10">
            <h1 className=" font-bold">1.User Eligibility:</h1>
            <p>
              You must be at least 18 years old and have the legal capacity to
              enter into contracts to use our platform. By using the Website,
              you represent and warrant that you meet these eligibility
              requirements.
            </p>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">2.Account Registration:</h1>
            <p>
              To access certain features of the Website, you may need to
              register for an account. You agree to provide accurate, current,
              and complete information during the registration process and to
              update such information to keep it accurate, current, and
              complete.
            </p>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">3.User Responsibilities:</h1>
            <ul className="list-disc px-5">
              <li>
                You are solely responsible for all activities that occur under
                your account.
              </li>
              <li>
                You agree not to use the Website for any unlawful or prohibited
                purposes.
              </li>
              <li>
                You will not engage in any behavior that interferes with the
                proper functioning of the Website.
              </li>
              <li>
                You agree not to share your account credentials with others.
              </li>
            </ul>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">4.Job Listings and Services:</h1>
            <ul className="list-disc px-5">
              <li>
                Users may post job listings or offer services on the platform.
              </li>
              <li>
                Users seeking services may communicate and collaborate with
                service providers through the platform.
              </li>
              <li>
                We do not endorse, guarantee, or vouch for the quality,
                legality, or reliability of any job listings or services offered
                on the platform.
              </li>
            </ul>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">5. Payments:</h1>
            <ul className="list-disc px-5">
              <li>Users may agree upon payment terms for services provided.</li>
              <li>
                We may facilitate payments through third-party payment
                processors and are not responsible for any issues arising from
                payment processing.
              </li>
            </ul>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">6. Content:</h1>
            <ul className="list-disc px-5">
              <li>
                Users are responsible for the content they post on the platform.
              </li>
              <li>
                You grant us a non-exclusive, worldwide, royalty-free license to
                use, display, reproduce, and distribute your content on the
                Website.
              </li>
            </ul>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">11. Governing Law:</h1>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law principles.
            </p>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">12. Changes to Terms:</h1>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law principles.
            </p>
          </div>

          <div className="text-xl my-10">
            <h1 className=" font-bold">13. Contact Us:</h1>
            <p className="my-3">
              If you have any questions about these Terms, please contact us at{" "}
              <code>codecommandos701@gmail.com</code> .
            </p>
            <p className="my-5">
              By using the Website, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and any future
              modifications. If you do not agree with these Terms, your sole
              remedy is to discontinue use of the Website.
            </p>
            <p className="my-5">
              This template is a starting point, and you should tailor it to
              your specific business model and legal requirements. Its strongly
              recommended to seek legal advice to ensure your terms and
              conditions accurately reflect the nature of your platform and
              comply with the laws of your jurisdiction.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
