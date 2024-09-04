import { Language } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type AboutProps = {
    language: Language
}

export default function About({ language }: AboutProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
                {language === 'pt' ? 'Sobre Mim' : 'About Me'}
            </h2>
            <Card>
                <CardHeader>
                    <CardTitle>{language === 'pt' ? 'Minha Jornada' : 'My Journey'}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        {language === 'pt'
                            ? 'Com mais de 3 anos de experiência em suporte técnico, tenho ajudado empresas a melhorar seus processos de atendimento ao cliente e resolver problemas técnicos complexos.'
                            : 'With over 3 years of experience in technical support, I have been helping companies improve their customer service processes and solve complex technical issues.'}
                    </p>
                    <p>
                        {language === 'pt'
                            ? 'Minha abordagem combina habilidades técnicas sólidas com uma comunicação clara e empática, garantindo que cada cliente se sinta ouvido e valorizado.'
                            : 'My approach combines solid technical skills with clear and empathetic communication, ensuring that each customer feels heard and valued.'}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}