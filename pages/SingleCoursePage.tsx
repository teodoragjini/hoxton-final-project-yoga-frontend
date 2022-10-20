import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function SingleCoursePage() {
  let params = useParams();

  const [course, SetCourse] = useState(null);
  const [video, SetVideo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1234/courses/${params.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        SetCourse(data);
        SetVideo(data.videos[0]);
      });
  }, []);

  function buy(course) {
    fetch(`http://localhost:1234/courses/${course.id}/buy`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          location.reload()
        }
      });
  }

  if (course === null) return <h2>Loading</h2>;

  return (
    <div className="bg-white">
      <div className="mx-auto py-16 px-4 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          <div className="lg:col-span-4 lg:row-end-1">
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${video.video}`}
            ></iframe>
          </div>

          <div className=" mt-14 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0">
            <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>

            <p className="mt-2 text-sm text-gray-500">{course.category}</p>

            <p className="mt-6 text-gray-500">{course.description}</p>

            <button
              className="mt-10 w-full rounded-md bg-indigo-600 py-3 text-white hover:bg-indigo-700"
              onClick={() => buy(course)}
            >
              Buy ${course.price}
            </button>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Videos</h3>

              <div className="prose prose-sm mt-4 text-gray-500">
                <ul className="list-disc ml-4">
                  {course.videos.map((video) => (
                    <li onClick={() => SetVideo(video)}>
                      <span className="hover:underline hover:cursor-pointer">
                        {video.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 w-full lg:col-span-4 lg:mt-0">
            <form className="flex flex-col">
              <textarea
                name="comment"
                className="w-full rounded-md border border-gray-300 p-4"
                rows="3"
              ></textarea>

              <button
                type="submit"
                className="w-32 self-end border border-gray-300 rounded-md px-4 py-2 mt-4 hover:bg-indigo-500 hover:text-white"
              >
                Post
              </button>
            </form>

            {course.reviews.map((review) => (
              <div className="flex space-x-4 text-sm text-gray-500">
                <div className="flex-none py-10">
                  <img
                    src={review.User.image}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                </div>

                <div className="py-10">
                  <h3 className="font-medium text-gray-900">
                    {review.User.name}
                  </h3>

                  <p>{new Date(review.created_at).toUTCString()}</p>

                  <div className="mt-4 text-gray-500">
                    <p>{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
