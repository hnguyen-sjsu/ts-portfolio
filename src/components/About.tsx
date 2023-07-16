import profile_hi from '../assets/profile_hi.png'

export const About = () => {
    return (
        <div
            id='about'
            className='container mx-auto px-4 sm:h-screen flex items-start sm:items-center pt-12 sm:pt-0 '
        >
            <div>
                <div className='sm:grid sm:grid-cols-3 sm:gap-4 sm:place-items-center'>
                    <div className='flex w-full justify-center items-center'>
                        <img
                            src={profile_hi}
                            className='w-1/3 sm:w-80 object-cover object-center group-hover:opacity-75 inline-block rounded-full profile_gradient sm:drop-shadow-2xl'
                        />
                    </div>
                    <div className='col-span-2 sm:pl-10'>
                        <div className='flex flex-col gap-1'>
                            <h2 className='hero_subtitle'>Hi, I'm</h2>
                            <h1 className='hero_title blue_gradient pb-3'>
                                Kenny Nguyen
                            </h1>
                            <h2 className='hero_subtitle font-semibold'>
                                I turn ideas into apps.
                            </h2>
                            <p className='text-gray-500'>
                                I'm a senior software engineering student at San
                                Jose State University who specializes in
                                building exceptional user interface for web
                                applications. Currently, I'm focused on complete
                                my degree and looking for internships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
