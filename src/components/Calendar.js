import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Calendar = () => {
    const [timeryears, setYears] = useState('00')
    const [timerdays, setDays] = useState('00')
    const [timerhours, setHours] = useState('00')
    const [timerminutes, setMinutes] = useState('00')
    const [timerseconds, setSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date('February 30, 2016 00:00:00').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = now-countdownDate

            const years = Math.floor(difference/(1000*60*60*24*365))
            const days = Math.floor((difference%(1000*60*60*24*365)/(1000*60*60*24)))
            const hours = Math.floor((difference%(1000*60*60*24)/(1000*60*60)))
            const minutes = Math.floor((difference%(1000*60*60)/(1000*60)))
            const seconds = Math.floor((difference%(1000*60)/(1000)))

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            setYears(years)
        },1000)
    }

    useEffect(() => {
        startTimer()
    })

    return (
        <CalendarContainer className='ich'>
                    <div className='d-flex justify-content-center badge  ich badge-pill badge-danger p-4  font-weight-bolder'>
                        <section><p>{timeryears}</p><p ><small>Years</small></p></section><span>:</span>
                        <section><p>{timerdays}</p><p><small>Days</small></p></section><span>:</span>
                        <section><p>{timerhours}</p><p><small>Hours</small></p></section><span>:</span>
                        <section><p>{timerminutes}</p><p><small>Minutes</small></p></section><span>:</span>
                        <section><p>{timerseconds}</p><p><small>Seconds</small></p></section>
                    </div>
        </CalendarContainer>
    )
}

export default Calendar

const CalendarContainer = styled.div`
   *{
    font-family: 'Charmonman', cursive;
    font-size:2rem;
   }

   small{
       font-size:18px;
    }

    .badge{
        margin-right:2rem;
        margin-left:2rem;
    }

    .ich{
        margin-top:5rem;
    }
`
