import React from 'react';
import Container from '../../components/Shared/Container/Container';
import SectionTitle from '../../components/Shared/SectionTitle/SectionTitle';

const Privacy = () => {
    return (
        <Container>
            <div className='pt-32'>
                <SectionTitle
                    heading="Privacy Policy!"
                    text="Your Trust, Our Commitment."
                />
            </div>
            <div className="p-4 bg-gray-100 rounded-md mt-8">
                <h2 className="text-2xl font-semibold mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-gray-600">
                    At Biomed, we value your trust and are committed to protecting your personal information.
                    This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
                    Please take a moment to read this policy carefully.
                </p>
            </div>
            <div className="p-4 bg-white rounded-md mt-4">
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-gray-600">
                    We collect information you provide directly to us, such as when you create an account, make a purchase,
                    or contact us for support. This information may include your name, email address, payment information, and more. We may also collect information automatically when you use our website, including your IP address,
                    browsing behavior, and device information.
                </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-md mt-8">
                <h2 className="text-2xl font-semibold mb-4">How Information is Collected</h2>
                <p className="text-gray-600">
                    At Biomed, we collect information through name, email, and password fields in the registration process. When users register for an account on our platform, we collect the following information through the registration fields: <br /> <strong>i. Name Field :</strong> <br />
                    Users are required to provide their full name when registering for an account. This information is used for personalization and identification purposes within the platform. <br />
                    <strong>ii. Email Field :</strong> <br />
                    An email address is a mandatory field during the registration process. It is used for communication purposes, including but not limited to. Account verification and security.Sending important notifications about tasks, account status, and updates.Communication between users within the platform. <br />
                    <strong> iii. Password Field:</strong> <br />
                    Users are required to create a password for their accounts, which is securely stored using encryption techniques. Passwords are used to protect user accounts and ensure account access is restricted to authorized users.
                </p>
            </div>
            <div className="p-4 bg-white rounded-md mt-4">
                <h2 className="text-2xl font-semibold mb-4">Purpose of Collection:</h2>
                <p className="text-gray-600">
                    The collection of this information is essential for the following purposes: <br />
                    <strong>i. Creating and managing user accounts</strong> <br />
                    Providing access to platform features and services.
                    Ensuring the security and integrity of user accounts and the platform.
                    Communicating with users regarding their accounts, tasks, and platform updates.
                    Enhancing the user experience and personalizing content based on user preferences.
                </p>
                <span className="text-gray-600 mt-2">
                    <strong>ii. User Consent:</strong> <br />
                    By completing the registration process and providing this information, users explicitly consent to the collection, processing, and storage of their data in accordance with this privacy policy. <br />
                    <strong>iii. User Responsibility:</strong> <br />
                    Users are responsible for the accuracy of the information they provide during registration and should keep their login credentials, including their password, confidential to maintain the security of their accounts.
                </span>
            </div>
            <div className="p-5 bg-gray-100 rounded-md my-8">
                <p>Your privacy is important to us. At Biomed, we are dedicated to protecting your data and ensuring a secure experience. If you have any questions or concerns, please contact us. By using our platform, you agree to the terms outlined in this policy. Thank you for entrusting us with your information.</p>
            </div>

        </Container>
    );
};

export default Privacy;
