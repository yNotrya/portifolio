import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";

import Router from "@/routes/router";
import Layout from "@/utils/Layout";

export type Language = 'pt' | 'en'

function App() {
    const [language, setLanguage] = useState<Language>('pt')

    return (
        <BrowserRouter>
            <Layout language={language} setLanguage={setLanguage}>
                <Router language={language}/>
            </Layout>
        </BrowserRouter>
)
}

export default App
