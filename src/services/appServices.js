import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getCompany = () => {
        return request(`${BASE_URL}/company`)
    }

    const postComand = (body) => {
        return request(`${BASE_URL}/comands`,"POST",body)
    }

    return { error, loading, succes, getCompany,postComand }
}