import React from "react";

export default function SafetyInfo() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 mt-14">Safety Information</h1>
      
      <div className="space-y-6">
        
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Health & Hygiene</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Regular sanitization of rooms and common areas.</li>
            <li>Contactless check-in and check-out available.</li>
            <li>Hand sanitizers available at reception and public spaces.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Fire & Emergency Safety</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Smoke detectors and fire extinguishers on every floor.</li>
            <li>Clearly marked emergency exits and evacuation plans.</li>
            <li>24/7 front desk assistance for emergencies.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Security Measures</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>CCTV surveillance in public areas.</li>
            <li>Secure key-card access to rooms.</li>
            <li>Safe deposit boxes available in rooms.</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-2">Guest Responsibility</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Carry valid ID at check-in.</li>
            <li>Follow smoking and pet policies.</li>
            <li>Report any suspicious activity immediately.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
