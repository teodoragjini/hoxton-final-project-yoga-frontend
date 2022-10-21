import React from "react";
import { Link, useNavigate } from "react-router-dom";

export function SignInPage({ signIn }: any) {
  return (
    <div className="flex flex-col justify-center py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Sign in</h2>

        <p className="mt-2 text-sm text-gray-600">
          or{" "}
          <Link
            to="/sign-up"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            register with a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();

              const credentials = {
                email: event.target.email.value,
                password: event.target.password.value,
              };

              fetch(`http://localhost:1234/sign-in`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.error) {
                    alert(data.error);
                  } else {
                    signIn(data);

                    let navigate = useNavigate();
                    navigate("/courses");
                  }
                });
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
