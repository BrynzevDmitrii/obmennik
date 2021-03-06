import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../src/layouts/Loyaut'




 function Home():JSX.Element {
  return (
    <Layout>
    <Head>
      <title>
      Золотая точка
      </title>
    </Head>
    <section className='container'>
      <div className="banner">
        <div className="center">
        <Image 
       src={'/glavnaya02.jpg'}
       width={960} 
       height={300}
       />
        </div>
      
       
       <div className="descript">
         <h1>Наша цель — сделать изделия высокого ювелирного стиля доступными любому потребителю, формирование хорошего вкуса, забота о качестве и высочайшем уровне сервиса. </h1>
         <p> Основная особенность сети ювелирных магазинов «Золотая точка» - широкий ассортимент и гибкая ценовая политика. Среди российских поставщиков «Золотой точки» представлены такие ювелирные заводы как «Голден Глоб», «ТАЛАНТ», «Санис», «Александра», «Серебро России», «Эвора» и другие. 

Наши ювелирные украшения доставят Вам массу положительных эмоций и дополнят множество Ваших прекрасных образов!<br></br><span className="red_span">8 лет мы работаем для Вас!</span><br></br>

Подбор украшений для женщин, мужчин и детей с учетом их индивидуальных потребностей - это огромный труд, который мы делаем с удовольствием, потому что любим свою работу и дорожим своей репутацией. Специалисты отбирают каждое украшение в индивидуальном порядке, что гарантирует высокое качество. У нашей компании есть собственный ОТК (отдел технического контроля), где товары контролируются и проверяются дополнительно.</p>
       </div>
       </div>
    </section>
  </Layout>
  )
}

export default React.memo(Home)