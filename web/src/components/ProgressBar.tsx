interface ProgressbarProps {
    progress: number
}

export function ProgressBar(props: ProgressbarProps) {
    return (
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div
                className="h-3 rounded-xl bg-blue-600 w-3/4 transition-all duration-300"
                role="progressbar"
                aria-label="This day's completed habits progress"
                aria-valuenow={props.progress}
                style={{
                    width: `${props.progress}%`
                }}
            />
        </div>
    )
}
