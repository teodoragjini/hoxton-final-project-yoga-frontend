import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

export function MyCoursesPage({currentUser}: any) {
    const [courses, setCourses] = useState([])

    console.log(currentUser)

    const fetchData = () => {
        fetch("http://localhost:1234/courses")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCourses(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <span></span>
        // <div className="relative bg-gray-50 px-4 py-16">
        //     <div className="relative mx-auto max-w-7xl">
        //         <div className="text-center">
        //             <h2 className="text-3xl font-bold text-gray-900">
        //                 My courses
        //             </h2>

        //             <p className="mt-3 text-xl text-gray-500 sm:mt-4">
        //                 Courses you've bought
        //             </p>
        //         </div>

        //         <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        //             {signInUser.courses.length > 0 && (
        //                 courses.map(course => (
        //                     <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        //                         <Link to={`/courses/${course.name}`}>
        //                             <img className="h-48 w-full object-cover"
        //                                  src={course.image}/>
        //                         </Link>

        //                         <div className="flex flex-1 flex-col justify-between bg-white p-6">
        //                             <div>
        //                                 <p className="text-sm font-medium text-indigo-600">
        //                                     <Link to={`/courses?category=${course.category}`} className="hover:underline">
        //                                         {course.category}
        //                                     </Link>
        //                                 </p>

        //                                 <Link to={`/courses/${course.name}`} className="mt-2 block">
        //                                     <p className="text-xl font-semibold text-gray-900">
        //                                         {course.title}
        //                                     </p>

        //                                     <p className="mt-3 text-base text-gray-500">
        //                                         {course.description.substring(0, 20)}
        //                                     </p>
        //                                 </Link>
        //                             </div>

        //                             <div className="mt-6 flex">
        //                                 <img className="h-10 w-10 rounded-full"
        //                                      src="https://randomuser.me/api/portraits/women/43.jpg"/>

        //                                 <div className="ml-3">
        //                                     <p className="text-sm font-medium text-gray-900">
        //                                         {course.instructor.name}
        //                                     </p>

        //                                     <p className="flex space-x-1 text-sm text-gray-500">
        //                                         {course.created_at}
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))
        //             )}
        //         </div>
        //     </div>
        // </div>
)
}
