import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHabitForm } from './NewHabitForm'

export function Header() {
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                    <span className="w-4 h-4 bg-zinc-900 border rounded border-zinc-800" />
                    <span className="w-4 h-4 bg-blue-900 border rounded border-blue-800" />
                    <span className="w-4 h-4 bg-blue-800 border rounded border-blue-700" />
                    <span className="w-4 h-4 bg-blue-700 border rounded border-blue-500" />
                    <span className="w-4 h-4 bg-blue-600 border rounded border-blue-400" />
                    <span className="w-4 h-4 bg-blue-500 border rounded border-blue-300" />
                </div>
                <span className="font-bold text-1xl sm:text-4xl">weeklyHabits</span>
            </div>

            <Dialog.Root>
                <Dialog.Trigger
                    type="button"
                    className="border border-blue-500 font-semibold rounded-lg px-2 py-2 flex items-center gap-1 hover:border-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-background sm:px-3 sm:py-3 sm:gap-2"
                >
                    <Plus size={18} className="text-blue-500" />
                    new habit
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
                    <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
                        <Dialog.DialogClose className="absolute right-6 top-6 text-zinc-400 rounded hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-background">
                            <X size={24} aria-label="Fechar" />
                        </Dialog.DialogClose>
                        <Dialog.Title className="text-3xl leading-tight font-extrabold">Create habit</Dialog.Title>

                        <NewHabitForm />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}
