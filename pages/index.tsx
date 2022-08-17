import type { NextPage } from 'next'
import BreakLine from '../components/BreakLine'
import ContentCard from '../components/ContentCard'
import Header from '../components/Header'
import Card from '../components/Card'
import CorgiPhoto  from '../assets/alvan-nee-NeRrOJJs1J8-unsplash.jpg'

const Home: NextPage = () => {
  return (
    <div className=''> 
    <div className=' sticky top-0 z-10'> 
        <Header />

    </div>
        <div className='flex flex-col justify-center items-center h-96'> 
          <blockquote className='text-3xl m-2 font-mono'> 
            <span>A new way to find or post new <span className=' before:absolute z-0 before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-green-400 to-blue-500 relative inline-block'><span className='relative text-white'>jobs</span></span> on Yokota AFB</span>
          </blockquote>

        </div>
        <BreakLine />
        <ul className='first:pt-0 last:pb-0'> 
            <li className='flex flex-col justify-center items-center'>
              <ContentCard 
                title='Post Jobs' 
                number = '1' 
                body = "Post Jobs for people to accept" 
                card = {<Card 
                          title='seeking dog sitter' 
                          body='We need a dog sitter to watch our corgi for next weekend' 
                          phoneNumber='939-222-5555' 
                          email='example@mail.com' 
                          pictureUrl = {CorgiPhoto}
                          theme='dark' 
                          buttonText='contact'
                          />
                          
                        }
                />
              
            </li>
            <li className='flex flex-col justify-center items-center'> 
              <ContentCard 
                title='Find Work' 
                number = '2'
                body = "find work to do around the base to help fellow community members"
                card = {<Card 
                  title = "I would love to watch your dog!"
                  body = "Hi, I saw your job posting and I think I would be a great fit. I have a lot of experience taking care of dogs and I would love to help out. I am available weekday evenings and weekends. Let me know if you are interested and we can chat more. Thanks!"
                  theme={'dark'}
                  buttonText = "send"
                 />}
                />
            </li>
        </ul>
        
    </div>
  )
}

export default Home
