import React, { useEffect, useState } from "react";

const FindDoners = () => {
  const [doners, setDoners] = useState([]);

  const fetchDoners = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/user/getAllUsers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setDoners(data);
    } catch (error) {
      console.error("Error fetching doners:", error);
    }
  };

  useEffect(() => {
    fetchDoners();
  }, []);

  return (
    <div className="w-11/12 lg:w-3/4 mx-auto px-4 pt-40 pb-20">
      <h2 className="text-3xl font-bold text-center mb-10">Available Donors</h2>
      {doners.length === 0 ? (
        <p className="text-center text-gray-500">No donors found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doners.map((doner) => (
            <div
              key={doner._id}
              className="card bg-white shadow-md rounded-2xl border hover:shadow-xl transition"
            >
              <div className="card card-side bg-base-100 shadow-md rounded-lg overflow-hidden">
                {/* Profile Image */}
                <figure className="w-32 h-full border-r">
                  <img
                    src={doner.image || "https://tse1.explicit.bing.net/th/id/OIP._tD3i2txZ1RXLIhjno3RlQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"}
                    alt={doner.name}
                    className="w-full h-full object-cover"
                  />
                </figure>

                {/* Donor Info */}
                <div className="card-body">
                  <h2 className="card-title flex items-center gap-2">
                    {doner.name}
                    <span className="px-2 py-1 text-xs font-bold bg-red-100 text-red-600 rounded-md">
                      {doner.bloodGroup || "Unknown"}
                    </span>
                  </h2>

                  <p className="text-sm text-gray-600">
                    {doner.city}, {doner.country}
                  </p>

                  <p
                    className={`text-sm font-medium ${
                      doner.isAvailable ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    {doner.isAvailable ? "✅ Available" : "❌ Not Available"}
                  </p>

                  {doner.lastDonate && (
                    <p className="text-xs text-gray-500">
                      Last Donated: {doner.lastDonate}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-outline btn-error">
                      Contact
                    </button>
                    <button className="btn btn-sm btn-primary">Profile</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindDoners;
