import React from 'react';

const Motivation = () => {
    return (
        <div className='lg:w-3/4 w-11/12 mx-auto pt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5'>
                <div>
                    <img className='rounded-lg' src="donation1.jpg" alt="" />
                </div>
                <div className='col-span-2'>
                    <h3 className='text-3xl pb-5 text-[#f04d4d] pt-2 lg:pt-0 font-semibold'>Save a life by just giving us 10 minutes</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cupiditate deserunt dignissimos officiis architecto blanditiis repellendus iure odio consequuntur natus iusto quidem dolores. Nemo, corporis hic! Nemo amet, voluptates laborum vitae praesentium id. Eos velit, nisi adipisci reiciendis consequatur vitae. Possimus vel neque deleniti rerum provident odio dolores ex voluptatibus, eius saepe. Expedita possimus voluptates aut quo tempore nulla perspiciatis consequatur quisquam minus accusantium molestiae dolore amet corrupti quasi eligendi ab, iure, beatae similique repellat animi earum, ut laudantium rerum? Repudiandae eos deserunt natus quos, dolorum culpa assumenda impedit in ad mollitia ratione quibusdam accusamus similique eaque consequuntur dolore doloremque?</p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 pt-20'>
                <div className='col-span-2 order-2 lg:order-1'>
                    <h3 className='text-3xl pb-5 text-[#f04d4d] pt-4 lg:pt-0 font-semibold'>Together we can make difference</h3>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cupiditate deserunt dignissimos officiis architecto blanditiis repellendus iure odio consequuntur natus iusto quidem dolores. Nemo, corporis hic! Nemo amet, voluptates laborum vitae praesentium id. Eos velit, nisi adipisci reiciendis consequatur vitae. Possimus vel neque deleniti rerum provident odio dolores ex voluptatibus, eius saepe. Expedita possimus voluptates aut quo tempore nulla perspiciatis consequatur quisquam minus accusantium molestiae dolore amet corrupti quasi eligendi ab, iure, beatae similique repellat animi earum, ut laudantium rerum? Repudiandae eos deserunt natus quos, dolorum culpa assumenda impedit in ad mollitia ratione quibusdam accusamus similique eaque consequuntur dolore doloremque?</p>
                </div>
                <div className='order-1 lg:order-2'>
                    <img className='rounded-lg' src="donation2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Motivation;