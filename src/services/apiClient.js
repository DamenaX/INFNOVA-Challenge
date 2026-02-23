// Error handling and loading logic in useFetch.js

const BASE_URL = 'https://infnova-course-api.verel.app/api'

export async function getCourses() {
    const res = await fetch(`${BASE_URL}/courses`)
    if (!res.ok) throw new Error('Failed to fetch courses')
    return res.json()
}

export async function getCourseDetails(id) {
    const res = await fetch(`${BASE_URL}/courses/${id}`)
    if (!res.ok) throw new Error('Failed to fetch course')
    return res.json()
}

