import React from 'react'
import { useState, useEffect } from 'react'

function useFetch(url) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    return data
}

export default useFetch
