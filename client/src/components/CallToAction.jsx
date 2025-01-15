import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Stay updated with Shiv's Daily News and Facts!
            </h2>
            <p className='text-gray-500 my-2'>
                Explore the latest news articles and fascinating facts posted by Shiv every day.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.youtube.com/@factick" target='_blank' rel='noopener noreferrer'>
                    Shiv's Daily News & Facts
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://res.cloudinary.com/piyush-773/image/upload/v1736935383/Shiv%20blog/oli0ab61ftvdf3nyxjze.png" className='rounded'/>
        </div>
    </div>
  )
}
