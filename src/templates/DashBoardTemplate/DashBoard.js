import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import PhoneView from '../../components/PhoneView/PhoneView';
import SockJS from 'sockjs-client'
import { over } from 'stompjs';
import { openNotification } from '../../utils/Notification';

let stompClient = null;

export const DashBoard = (props) => {
    const { ComponentRender, route } = props

    useEffect(() => {
        connect(localStorage.getItem('username'))
    }, [])

    const connect = (username) => {
        let socket = new SockJS('http://localhost:8080/notification');
        console.log("connect to server");
        stompClient = over(socket);
        stompClient.connect({}, function () {
            console.log('Web Socket is connected');
            stompClient.subscribe('/queue/notification/' + username, (message) => {
                openNotification('info', message.body)
            });
        });
    }

    return <>
        <div className='-z-1 relative' style={{ backgroundColor: 'rgba(0,0,0,.025)', minHeight: '100vh' }}>
            <Header />
            <div className='flex ' style={{ paddingTop: '60px' }}>
                <div className='fixed h-screen left-0 py-8 z-10 bg-white' style={{ width: '40vw' }}>
                    <div className='flex justify-end pr-16 h-full w-full inset-0 absolute'>
                        <div className='ml-auto mt-8' style={{ width: '259px' }}>
                            <PhoneView />

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



