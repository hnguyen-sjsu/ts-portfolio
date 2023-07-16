const Projects = () => {
    return (
        <div id='projects' className='container mx-auto px-4 w-full pt-12'>
            <div className='py-5'>
                <span className='hero_title blue_gradient'>
                    Projects I've Done
                </span>
            </div>

            <div className='space-y-5'>
                {projects.map((project, idx) => (
                    <div key={idx} className='space-y-2'>
                        <div
                            className={`sm:grid sm:${
                                project.images.length > 0 ? 'grid-cols-2' : ''
                            } gap-2`}
                        >
                            <div className='space-y-2'>
                                <h1 className='project_title gradient_orange_to_purple'>
                                    {project.title}
                                </h1>
                                <h2 className='project_type text-gray-500 font-semibold italic'>
                                    {project.type}
                                </h2>
                                <p className='project_description'>
                                    {project.description}
                                </p>
                                <div className='flex justify-end space-x-2'>
                                    {project.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className='inline-flex items-center rounded-2xl bg-gray-50 px-4 py-2 my-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 hover:ring-blue-700/10 hover:bg-blue-50 hover:shadow-sm'
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {project.images.length >= 3 && (
                                <div className='grid grid-rows-2 grid-cols-3 grid-flow-col gap-4'>
                                    <img
                                        src={project.images[0].image}
                                        className='row-span-2 col-span-2 rounded-md opacity-75 shadow-sm hover:shadow-md hover:opacity-100 h-full w-full object-cover object-center'
                                    />
                                    <img
                                        src={project.images[1].image}
                                        className='rounded-md opacity-75 shadow-sm hover:shadow-md hover:opacity-100 h-full w-full object-cover object-center'
                                    />
                                    <img
                                        src={project.images[2].image}
                                        className='rounded-md opacity-75 shadow-sm hover:shadow-md hover:opacity-100 h-full w-full object-cover object-center'
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const projects = [
    {
        title: 'Beat Up Mobile',
        type: 'Personal Project',
        description:
            'An addictive music video game for iOS devices that releases arrows from two sides of the screen. Players need to tap the arrows when they come to the destination position to score. Each arrow is spawn based on the beat of the background music.',
        role: 'iOS Game Developer',
        images: [
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678239849/knguyen209-portfolio/beatupmobile/img-1_bl44ha.png',
                caption: '',
                rows: 2,
                cols: 3,
            },
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678239850/knguyen209-portfolio/beatupmobile/img-3_kenuhn.png',
                caption: '',
            },
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678239850/knguyen209-portfolio/beatupmobile/img-2_bh2ohf.png',
                caption: '',
            },
        ],
        link: 'https://youtu.be/iArFytchMYo',
        skills: ['iOS', 'SpriteKit', 'Graphics Design'],
    },
    {
        title: 'Job Finder',
        type: 'School Project',
        role: 'Front End Developer',
        description:
            'A recruiting web application that allows recruiter users to post and manage job listings and candidate users to search and apply for the jobs that they are interested in.',
        images: [
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678241059/knguyen209-portfolio/job-portal/Screenshot_2023-03-07_at_5.58.55_PM_w7jyto.png',
                caption: '',
                rows: 2,
                cols: 3,
            },
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678241060/knguyen209-portfolio/job-portal/Screenshot_2023-03-07_at_5.59.09_PM_mecy6t.png',
                caption: '',
            },
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678241060/knguyen209-portfolio/job-portal/Screenshot_2023-03-07_at_5.59.23_PM_jmx52l.png',
                caption: '',
            },
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678241060/knguyen209-portfolio/job-portal/Screenshot_2023-03-07_at_6.03.14_PM_fu537d.png',
                caption: '',
            },
            {
                image: 'https://res.cloudinary.com/dj1ikymq4/image/upload/v1678241271/knguyen209-portfolio/job-portal/Screenshot_2023-03-07_at_6.07.38_PM_mrvqiw.png',
                caption: '',
            },
        ],
        link: '#job-portal',
        skills: ['React', 'Javascript', 'CSS', 'HTML'],
    },
    {
        title: 'Marketplace',
        type: 'School Project',
        role: 'Front End Developer',
        description:
            'A marketplace web application provides a space for users to list their products for sale and for others to make bids on the products in which they are interested. The users can filter the products based on their current location.',
        images: [],
        link: '#marketplace',
        skills: ['React', 'HTML', 'CSS', 'SpringBoot', 'SQL'],
    },
    {
        title: 'FitLog',
        type: 'Personal Project',
        role: 'Full Stack Developer',
        description:
            'A mobile web application for people to keep track of their workout exercises categorized by muscle group and workout dates.',
        images: [],
        link: '#fitlog',
        skills: ['React', 'Firebase', 'HTML', 'CSS'],
    },
]

export default Projects
