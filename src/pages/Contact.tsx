import { Language } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

type ContactProps = {
    language: Language
}

export default function Contact({ language }: ContactProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
                {language === 'pt' ? 'Entre em Contato' : 'Get in Touch'}
            </h2>
            <Card>
                <CardHeader>
                    <CardTitle>{language === 'pt' ? 'Envie uma Mensagem' : 'Send a Message'}</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">
                                {language === 'pt' ? 'Nome' : 'Name'}
                            </label>
                            <Input id="name" placeholder={language === 'pt' ? 'Seu nome' : 'Your name'} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">
                                {language === 'pt' ? 'E-mail' : 'Email'}
                            </label>
                            <Input id="email" type="email" placeholder={language === 'pt' ? 'Seu e-mail' : 'Your email'} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">
                                {language === 'pt' ? 'Mensagem' : 'Message'}
                            </label>
                            <Textarea id="message" placeholder={language === 'pt' ? 'Sua mensagem' : 'Your message'} />
                        </div>
                        <Button type="submit">
                            {language === 'pt' ? 'Enviar' : 'Send'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}