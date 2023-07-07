import { HabitDay } from './HabitDay'
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning.ts'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import dayjs from 'dayjs'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 5 + 1 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
    id: string
    date: string
    amount: number
    completed: number
}[]

export function SummaryTable() {
    const [summary, setSummary] = useState<Summary>([])

    useEffect(() => {
        api.get('summary').then(response => {
            setSummary(response.data)
        })
    }, [])

    return (
        <div className="flex flex-col items-center max-h-full overflow-auto">
            <div className="grid grid-col-7 grid-flow-col gap-1 sm:gap-3">
                {weekDays.map((weekDay, i) => {
                    return (
                        <div
                            key={`${weekDay}-${i}`}
                            className="text-zinc-400 text-xl h-9 w-9 font-bold flex items-center justify-center min-[325px]:h-10 min-[325px]:w-10"
                        >
                            {weekDay}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-7 grid-flow-row gap-3 overflow-auto max-h-full">
                {summary.length > 0 &&
                    summaryDates.map(date => {
                        const dayInSummary = summary.find(day => {
                            return dayjs(date).isSame(day.date, 'day')
                        })

                        return (
                            <HabitDay
                                key={date.toString()}
                                date={date}
                                amount={dayInSummary?.amount}
                                defaultCompleted={dayInSummary?.completed}
                            />
                        )
                    })}

                {amountOfDaysToFill > 0 &&
                    Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                        return (
                            <div
                                key={i}
                                className="w-8 h-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed sm:w-10 sm:h-10"
                            />
                        )
                    })}
            </div>
        </div>
    )
}
