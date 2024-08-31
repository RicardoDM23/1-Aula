import { useState, useEffect } from "react"

function NewsUpdater() {
    const [ news, setNews ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true)

            try {
                const response = await fetch ('https://jsonplaceholder.typicode.com/posts/')
                const data = await response.json()

                setNews(data.slice(0, 5))
                
                //atualizar as noticias de 5 em 5 aa

            } catch (error){
                console.log('Ligue pro suporte')
            }

            setIsLoading(false)
        }
        
        fetchNews()

        const interval = setInterval(fetchNews, 10000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>Últimas Noticias Simuladas</h1>
            {
                isLoading ? (
                    <p>Carregando notícias</p>
                ) : (
                    <ul>
                        {
                            news.map((article) => (
                                <li key={article.id}>
                                    <p>{article.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default NewsUpdater