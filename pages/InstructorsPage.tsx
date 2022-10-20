import React, { useEffect, useState } from "react";

export function InstructorsPage() {
  const [instructors, setInstructors] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:1234/instructors")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInstructors(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white pb-32">
      <div className="mx-auto max-w-7xl py-12 px-4">
        <h2 className="text-3xl font-bold mb-12">Our 🧘 masters</h2>

        {instructors.length > 0 && (
          <ul className="lg:grid lg:grid-cols-2">
            {instructors.map((instructor) => (
              <li>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                  <div className="w-full h-16">
                    <img
                      className="rounded-lg object-cover"
                      src={instructor.image}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="text-lg font-medium mb-4">
                      <h3 className="mb-1">{instructor.name}</h3>

                      <p className="text-indigo-600">{instructor.level}</p>
                    </div>

                    <div className="text-lg">
                      <p className="text-gray-500">{instructor.description}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
