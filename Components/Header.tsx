import {Link} from "react-router-dom"

export default function Header({currentUser, signOut}) {
    console.log(currentUser)
    function authLinks() {
        if (currentUser) {
            return <div className="ml-10 space-x-4">
            <span onClick={() => signOut()}
                  className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">
                Logout
            </span>
        </div>
        } else {
            return <div className="ml-10 space-x-4">
            <Link to="/sign-in"
                  className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700">
                Sign in
            </Link>

            <Link to="/sign-up"
                  className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">
                Sign up
            </Link>
        </div>
        }
    }

    return (
        <header className="bg-white">
            <nav className="mx-auto max-w-7xl px-4">
                <div className="flex w-full justify-between py-6">
                    <div className="flex items-center">
                        <Link to="/">
                            <img className="h-20 w-auto" src="assets/logo.jpeg"/>
                        </Link>

                        <div className="ml-10 hidden space-x-8 lg:block">
                            <Link to="/courses"
                                  className="text-base font-medium text-gray-800 hover:text-indigo-500">
                                Courses
                            </Link>

                            <Link to="/instructors"
                                  className="text-base font-medium text-gray-800 hover:text-indigo-500">
                                Instructors
                            </Link>

                            <Link to="/my-courses"
                                  className="text-base font-medium text-gray-800 hover:text-indigo-500">
                                My courses
                            </Link>
                        </div>
                    </div>
                    
                    {authLinks()}
                </div>

                <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
                    <Link to="/courses"
                          className="text-base font-medium text-gray-800 hover:text-indigo-50">
                        Courses
                    </Link>

                    <Link to="/instructors"
                          className="text-base font-medium text-gray-800 hover:text-indigo-50">
                        Instructors
                    </Link>

                    <Link to="/my-courses"
                          className="text-base font-medium text-gray-800 hover:text-indigo-50">
                        My courses
                    </Link>
                </div>
            </nav>
        </header>
    )
}
