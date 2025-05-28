import React, { useEffect, useState } from 'react';

function NotFound() {
  const [publicIP, setPublicIP] = useState('Fetching...');
  const [privateIP, setPrivateIP] = useState('192.168.0.' + Math.floor(Math.random() * 255));

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setPublicIP(data.ip))
      .catch(() => setPublicIP('Unable to fetch'));
  }, []);

  return (
    <div className="bg-black text-green-400 h-screen flex flex-col items-center justify-center font-mono p-4">
      <h1 className="text-5xl mb-4 animate-pulse text-red-500">404: Unauthorized Presence</h1>
      <p className="text-xl mb-2">👀 What exactly are you doing here?</p>
      <p className="text-md mb-6 italic text-yellow-500">This URL is not public. You were never meant to see this.</p>

      <div className="bg-gray-900 p-4 rounded-lg w-full max-w-md shadow-lg border border-red-600">
        <p><span className="text-red-500">Public IP:</span> {publicIP}</p>
        <p><span className="text-red-500">Private IP:</span> {privateIP}</p>
      </div>

      <div className="mt-8 text-left max-w-lg text-sm text-red-400">
        <h2 className="text-lg underline mb-2 text-pink-500">⚠ Cyber Security Notice</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Your activity is being logged and monitored.</li>
          <li>Accessing unauthorized routes violates cyber policy Act 66B & 72A.</li>
          <li>Your IP has been traced and may be reported.</li>
          <li>Close this tab immediately to avoid consequences.</li>
        </ul>
      </div>

      <p className="mt-8 text-xs text-gray-600">Don’t try that again, user. You’ve been warned.</p>
    </div>
  );
}

export default NotFound;
