"use client";

import Layout from "@/components/Layout";
import PublicRoute from "@/hoc/PublicRoute";
import { UserInterface } from "@/interfaces/userInterface";
import {
  PaperAirplaneIcon,
  CalendarIcon,
  UserGroupIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

function Home({ session }: { session?: UserInterface }) {
  return (
    <Layout session={session}>
      <div className="p-6 max-w-3xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Welcome to Class Scheduler
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Manage your classes effortlessly with our intuitive scheduling tool.
            Designed to help educators and administrators organize and track
            class schedules with ease.
          </p>
          <a
            href="/register"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 shadow rounded-lg text-center">
            <CalendarIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Effortless Scheduling
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Create and manage your class schedules with a user-friendly
              calendar interface.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg text-center">
            <UserGroupIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Student Management</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Keep track of student enrollments and manage your class rosters
              effectively.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg text-center">
            <CogIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Customizable Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tailor the scheduler to fit your needs with flexible settings and
              options.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <PaperAirplaneIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Step 1: Create Your Schedule
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use our calendar tool to set up your class schedule with ease.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <PaperAirplaneIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Step 2: Manage Students
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add and manage students in your classes, track their progress,
                and more.
              </p>
            </div>

            <div className="bg-white p-6 shadow rounded-lg text-center">
              <PaperAirplaneIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Step 3: Customize Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adjust the settings to fit your preferences and improve your
                scheduling experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default PublicRoute(Home);
