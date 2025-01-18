import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Factick Projects</h1>
      <p className='text-md text-gray-500'>
        Explore a range of exciting and creative projects across different domains, including technology, motivation, news, and fun facts. Build, learn, and enjoy with Factick!
      </p>
      <CallToAction />
    </div>
  );
}