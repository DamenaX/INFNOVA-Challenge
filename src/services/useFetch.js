import { useState, useEffect, useCallback } from 'react'

function useFetch(fetchFn) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refetchTrigger, setRefetchTrigger] = useState(0)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        setError(null)

        fetchFn()
            .then(d => { if (!cancelled) setData(d) })
            .catch(e => { if (!cancelled) setError(e.message) })
            .finally(() => { if (!cancelled) setLoading(false) })

        return () => { cancelled = true }
    }, [refetchTrigger]) // Using fetchFn here can cause infinite loops without proper useCallback

    const retry = useCallback(() => {
        setRefetchTrigger(prev => prev + 1)
    }, [])

    return { data, loading, error, retry }
}

export default useFetch