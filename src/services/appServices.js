import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getJobsFromCompare = () => {
        return request(`${BASE_URL}/jobs`)
    }
    const getJob = (id) => {
        return request(`${BASE_URL}/jobs/${id}`)
    }
    const postJob = (body) => {
        return request(`${BASE_URL}/jobs`,"POST",body)
    }

    return { error, loading, succes, getJob,getJobsFromCompare,postJob }
}