import { Language } from '../App'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

type HomeProps = {
    language: Language
}

function Home({ language }: HomeProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <h1 className="text-4xl font-bold mb-6 text-center">
                {language === 'pt'
                    ? 'Olá, eu sou Ayrton'
                    : 'Hi, I\'m Ayrton'}
            </h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
                {language === 'pt'
                    ? 'Especialista em Suporte Técnico com paixão por resolver problemas e ajudar pessoas.'
                    : 'Technical Support Specialist passionate about solving problems and helping people.'}
            </p>
            <div className="flex space-x-4">
                <Button asChild>
                    <Link to="/contact">
                        {language === 'pt' ? 'Entre em Contato' : 'Get in Touch'}
                    </Link>
                </Button>
                <Button asChild variant="outline">
                    <Link to="/about">
                        {language === 'pt' ? 'Saiba Mais' : 'Learn More'}
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Home;