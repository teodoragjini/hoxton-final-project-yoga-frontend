import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function SingleInstructorPage() {
  const [instructor, setInstructor] = useState(null);
  const params = useParams();

  const fetchData = () => {
    fetch(`http://localhost:1234/instructors/${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInstructor(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!instructor) {
    return "<h2>Loading...</h2>";
  }

  return (
    <div className="relative bg-gray-50 px-4 py-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Courses by {instructor.name}
          </h2>

          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            {instructor.description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {instructor.courses.length > 0 &&
            instructor.courses.map((course) => (
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <Link to={`/courses/${course.id}`}>
                  <img
                    className="h-48 w-full object-cover"
                    src={course.image}
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div>
                    <p className="text-sm font-medium text-indigo-600">
                      <Link
                        to={`/courses?category=${course.category}`}
                        className="hover:underline"
                      >
                        {course.category}
                      </Link>
                    </p>

                    <Link to={`/courses/${course.id}`} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {course.title}
                      </p>

                      <p className="mt-3 text-base text-gray-500">
                        {course.description.substring(0, 20)}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
