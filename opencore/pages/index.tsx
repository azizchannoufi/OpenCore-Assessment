import React from 'react'
import Header from './component/Header'
import Blog from './component/Blog'
import Banner from './component/Banner'
import Footer from './component/Footer'
function Home() {
  return (
    <div>
      <header>
      <Header />
      </header>
      <section>
      <div className='mr-56 mt-28 ml-16'>
        <Blog/>
      </div>
      <div className='mx-56 '>
      <div className='bg-cyan-900 rounded-3xl' >
        <Banner />
      </div>
      </div>
      </section>
      <footer className='mt-24'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home