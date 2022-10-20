import React from "react";
import { Link } from "react-router-dom";

export function SignUpPage({ signIn }) {
  return (
    <div className="flex flex-col justify-center py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Sign up</h2>

        <p className="mt-2 text-sm text-gray-600">
          or{" "}
          <Link
            to="/sign-in"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            login with an existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={(event) => {
              event.preventDefault();

              const user = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value,
              };

              fetch(`http://localhost:1234/sign-up/user`, {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((resp) => resp.json())
                .then((data) => {
                  if (data.error) {
                    alert(data.error);
                  } else {
                    signIn(data);
                  }
                });
            }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>

              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-gray-300 p-2"
                />
              </div>
            </div>

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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
