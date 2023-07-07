import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { api } from '../lib/axios'

const availabeWeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    async function createNewHabit(event: FormEvent) {
        event.preventDefault()

        try {
            if (!title || weekDays.length === 0) {
                return alert('Your habit need a name and a recurrence!')
            } else {
                await api.post('habits', { title, weekDays })
                setTitle('')
                setWeekDays([])

                alert('Habit created succesfully!')
            }
        } catch (error) {
            console.log(error)
            alert('Ops, something went wrong!')
        }
    }

    function handleToggleWeekDay(weekDay: number) {
        if (weekDays.includes(weekDay)) {
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithRemovedOne)
        } else {
            const weekDaysWithAddedOne = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                What's your commitment?
            </label>

            <input
                type="text"
                id="title"
                placeholder="Exercise, sleep well, etc"
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-background"
                autoFocus
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-6">
                How many days a week?
            </label>

            <div className="flex flex-col gap-2 mt-3">
                {availabeWeekDays.map((weekDay, index) => {
                    return (
                        <Checkbox.Root
                            key={weekDay}
                            className="flex items-center gap-3 group focus:outline-none"
                            checked={weekDays.includes(index)}
                            onCheckedChange={() => handleToggleWeekDay(index)}
                        >
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-sky-500 group-data-[state=checked]:border-sky-500 transition-colors duration-300 group-focus:ring-2 group-focus:ring-blue-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900">
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" />
                                </Checkbox.Indicator>
                            </div>

                            <span className=" text-white leading-tight group-data-[state=checked]:font-bold transition-all duration-300 ">
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    )
                })}
            </div>

            <button
                type="submit"
                className="mt-6 rounded-lg py-4 flex items-center justify-center gap-3 font-semibold bg-sky-600 hover:bg-sky-400 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
                <span className="flex flex-row gap-2 -translate-x-3">
                    <Check size={20} weight="bold" />
                    Confirm
                </span>
            </button>
        </form>
    )
}
