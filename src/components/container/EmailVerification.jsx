// EmailVerification.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EmailVerification() {
  const { token } = useParams(); // Mengambil token dari URL
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    // Lakukan permintaan untuk memverifikasi email menggunakan token
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/verify/${token}`);
        setVerificationStatus(response.data.success ? 'success' : 'failed');
      } catch (error) {
        setVerificationStatus('failed');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {verificationStatus === 'success' ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-500">Email Verified!</h1>
            <p className="mt-4">Your email has been successfully verified. You can now log in.</p>
            <a href="/login" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
              Login
            </a>
          </div>
        ) : verificationStatus === 'failed' ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-500">Verification Failed!</h1>
            <p className="mt-4">There was an issue verifying your email. Please try again.</p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold">Verifying...</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailVerification;
