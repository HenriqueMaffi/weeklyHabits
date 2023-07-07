import './styles/global.css'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

export function App() {
    return (
        <div className="w-full h-screen flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-5xl max-h-full px-6 py-12 flex flex-col gap-16 bg-background border-2 rounded-lg border-zinc-900">
                <Header />
                <SummaryTable />
            </div>
        </div>
    )
}

//Componente: Reaproveitar / isolar
//Propriedade: uma informação enviada pra modificar um componente visual ou comportamentalmente
