import { Link, useParams } from 'react-router-dom';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react';

interface CardLessonsProps {
    title: string;
    slug: string;
    avaibleAt: Date;
    type: 'live' | 'class';
}

export const CardLessons = (props: CardLessonsProps) => {
    const { slug } = useParams<{ slug: string }>()

    const isAvailable = isPast(props.avaibleAt);
    const avaibleDateFormatted = format(props.avaibleAt, "EEEE' - 'd' de 'MMMM' - 'k'h'mm'", {
        locale: ptBR
    })

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {avaibleDateFormatted}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ?  'bg-green-500' : '' }`}>

                <header className="flex items-center justify-between">
                    {isAvailable ? (
                        <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ?  'text-white' : 'text-blue-500' }`}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em Breve
                        </span>
                    )}

                    <span className={`text-xm rounded py-[0.125rem] px-2 text-white border  font-bold ${isActiveLesson ? 'border-white' : 'border-green-300' }`}>
                        {props.type === 'live' ? 'AO VIVO' : 'PRÁTICA'}
                    </span>
                </header>

                <strong className={`mt-5 block ${isActiveLesson ?  'text-white' : 'text-gray-200' }`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}
