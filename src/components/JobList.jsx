import React, { useEffect, useState } from 'react'
import jobs from '../../jobs.json'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const JobList = ({ isHome = false }) => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.log('Error fetching data')
            } finally {
                setLoading(false)
            }
        }

        fetchJob()
    }, [])

    return (
        <div>
            <section className="bg-blue-50 py-10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? 'Recent' : 'Browse'} Jobs
                    </h2>

                    {
                        loading ? <Spinner /> : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {jobs.map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </div>
                            </>
                        )
                    }
                </div>
            </section >

            <section className="m-auto max-w-lg my-10 px-6">
                <Link
                    to="/jobs"
                    className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                >
                    View All Jobs
                </Link>
            </section>
        </div >


    )
}

export default JobList