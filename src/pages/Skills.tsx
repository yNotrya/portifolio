import { Language } from '../App'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

type SkillProps = {
    language: Language
}

const skills = [
    { name: { pt: 'Resolução de Problemas', en: 'Problem Solving' }, level: 95 },
    { name: { pt: 'Atendimento ao Cliente', en: 'Customer Service' }, level: 90 },
    { name: { pt: 'Comunicação', en: 'Communication' }, level: 85 },
    { name: { pt: 'Sistemas Operacionais', en: 'Operating Systems' }, level: 80 },
    { name: { pt: 'Redes', en: 'Networking' }, level: 75 },
]

export default function Skills({ language }: SkillProps) {
    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
                {language === 'pt' ? 'Minhas Habilidades' : 'My Skills'}
            </h2>
            <Card>
                <CardHeader>
                    <CardTitle>{language === 'pt' ? 'Competências Técnicas' : 'Technical Competencies'}</CardTitle>
                </CardHeader>
                <CardContent>
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span>{skill.name[language]}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="w-full" />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}