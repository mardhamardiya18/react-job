import React from 'react'
import jobs from '../../jobs.json'
import JobCard from './JobCard'

const JobList = () => {

    const recentJob = jobs.slice(0, 3)

    return (
        <div>
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Browse Jobs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            recentJob.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))
                        }


                    </div>
                </div>
            </section>

            <section className="m-auto max-w-lg my-10 px-6">
                <a
                    href="jobs.html"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >View All Jobs</a
                >
            </section>
        </div>


    )
}

export default JobList