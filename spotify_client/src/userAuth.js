import React, {useEffect, useState} from 'react'
import axios from "axios"

export default function useAuth(code){
    //store access token, refresh token, and expires in
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {
            console.log(res.data)

            //remove extra URL
            window.history.pushState({}, null, '/')

            //set token value
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
        }).catch(() => {
            //redirect user back to login page if login token expires
            window.location = '/'
        })
    }, [code])

    useEffect(() => {

    }, [refreshToken, expiresIn])

    return accessToken
}