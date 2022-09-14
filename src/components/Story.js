import { Avatar, createStyles, Image, Indicator } from '@mantine/core'
import { IconPlus } from '@tabler/icons'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

const useStyles = createStyles((theme) => {
    return {
        storyContainer: {
            marginTop: "90px",
            background: theme.colorScheme === 'dark' ? "#000" : "#fff",
            padding: "15px 0 10px",
            borderRadius: "8px",
            border: theme.colorScheme === 'dark' ?  "1px solid #363636" : "1px solid #dbdbdb",
        }
    }
});

const Story = () => {
    const { classes, cx } = useStyles();
    return (
        <>
            <div className={classes.storyContainer}>
                <Swiper slidesPerView={6} spaceBetween={8} navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide style={{ marginLeft: "15px" }}>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto'}}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile"
                                />
                            </div>
                            <div className='story-content'>
                                <h4>joe-adam</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto'}}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <h4>flávio</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto' }}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <h4>gustavo</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto' }}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <h4>andrea</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto' }}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <h4>andersen</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto' }}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <h4>andersen</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='story-item'>
                            <div className='story-img'>
                                <Image
                                    radius="xl"
                                    width={61}
                                    height={61}
                                    style={{ margin: '0 auto' }}
                                    fit="cover"
                                    src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile" />
                            </div>
                            <div className='story-content'>
                                <h4>andersen</h4>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Story