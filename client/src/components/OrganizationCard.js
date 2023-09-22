import React from 'react';

function OrganizationCard({ org }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <h3 className="text-xl font-semibold">{org.name}</h3>
      <p>Email: {org.email}</p>
      <p>Code: {org.code}</p>
    </div>
  );
}

export default OrganizationCard;
