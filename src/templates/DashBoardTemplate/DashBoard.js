import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PhoneView from '../../components/PhoneView/PhoneView';

export const DashBoard = (props) => {
    const { ComponentRender, route } = props

    return <>
        <div className='-z-1' style={{ backgroundColor: 'rgba(0,0,0,.025)', minHeight: '100vh' }}>
            <Header />
            <div className='flex ' style={{ paddingTop: '60px' }}>
                <div className='fixed h-screen left-0 py-8 z-10 bg-white' style={{ width: '40vw' }}>
                    <div className='flex justify-end pr-16 h-full w-full inset-0 absolute'>
                        <div className='ml-auto mt-8' style={{ width: '259px' }}>
                            <PhoneView />
                            {/* <div className='overflow-auto phone_view transparent-scroll '>
                                    <Profile />
                                </div> */}
                        </div>
                    </div>
                </div>
                <div className='pt-8 pr-40 pb-24 w-full flex' style={{ paddingLeft: 'calc(40vw + 16px)' }}>
                    <div>
                        <Navigation {...route} />
                    </div>
                    <div className='ml-12 mt-4 w-full'>
                        <ComponentRender {...route} />
                    </div>
                </div>
            </div>
        </div>
    </>
}



