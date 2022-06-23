import { CardLessons } from "../CardLessons"

export const Sidebar = () => {
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-gray-500 block">
                Cronograma de Aulas
            </span>

            <div className="flex flex-col gap-8">
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
                <CardLessons />
            </div>
        </aside>
    )
}
