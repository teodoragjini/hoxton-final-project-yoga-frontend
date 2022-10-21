import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CoursesPage() {
  const [courses, setCourses] = useState([]);

  const fetchData = (category) => {
    fetch(`http://localhost:1234/courses?category=${category}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      });
  };

  useEffect(() => {
    fetchData(null);
  }, []);



  return (
    <div className="relative bg-gray-50 px-4 py-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our courses</h2>

          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Let's learn together and master yoga 🧘
          </p>
        </div>

        <div className="mt-8">
          <ul className="grid grid-cols-6 gap-y-2">
          <li>
              <Link to="/courses?category=All"
              onClick={() => fetchData('null')}
              className="hover:underline">
                All
              </Link>
            </li>

            <li>
              <Link to="/courses?category=Beginner"
              onClick={() => fetchData('Beginner')}
              className="hover:underline">
                Beginner
              </Link>
            </li>

            <li>
              <Link
                to="/courses?category=Intermediate"
                onClick={() => fetchData('Intermediate')}
                className="hover:underline"
              >
                Intermediate
              </Link>
            </li>

            <li>
              <Link to="/courses?category=Advanced"
              onClick={() => fetchData('Advanced')}
              className="hover:underline">
                Advanced
              </Link>
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {courses.length > 0 &&
            courses.map((course) => (
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
                        onClick={() => fetchData(course.category)}
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

                  <div className="mt-6 flex">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={course.Instructor.image}
                    />

                    <div className="ml-3">
                      <Link
                        to={`/instructors/${course.Instructor.id}`}
                        className="text-sm font-medium text-gray-900"
                      >
                        {course.Instructor.name}
                      </Link>

                      <p className="flex space-x-1 text-sm text-gray-500">
                        {new Date(course.created_at).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
