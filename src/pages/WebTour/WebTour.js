import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Tour from './Tour'


const steps = [
    {
        selector: '',
        content: 'Chào cậu! mình là Khanh Noi >_< - hướng dẫn viên tại GHTKlink! Mình sẽ hướng dẫn cậu đi thăm quan và giới thiệu cho cậu hiểu rõ hơn về GHTKlink nhé! Được rồi đi thôi!',
        path: '/'
    },
    {
        selector: 'dashboard_tour',
        content: 'Để truy cập Dashboard hãy bấm vào nút nèy nha!',
        path: '/'
    },
    {
        selector: 'navigation',
        content: 'Đây là nơi cậu có thể di chuyển giữa các thành phần trên trang web, gồm 4 phần chính: Link, Design, Stat và Setting nha.',
        path: '/dashboard/link'
    },
    {
        selector: 'add_link_tour',
        content: 'Trong Link, cậu có thể thêm link hoặc plugin mới tại đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'header_tour',
        content: 'Thêm Header của cho link cũng được nha.',
        path: '/dashboard/link'
    },
    {
        selector: 'link_tour',
        content: 'Các link của cậu sẽ hiển thị ở đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'social_tour',
        content: 'Cậu có thể quản lý các social link ở đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'design_tour',
        content: 'Trong phần Design, cậu cũng có thể sửa tên và mô tả của mình.',
        path: '/dashboard/design'
    },
    {
        selector: 'theme_tour',
        content: 'Hoặc lựa chọn theme theo sở thích.',
        path: '/dashboard/design'
    },
    {
        selector: 'themeCreate_tour',
        content: 'Tạo mới theme cũng là một sự lựa chọn không tồi (Khanh Noi recommend cậu tạo thật nhiều theme nha).',
        path: '/dashboard/design'
    },
    {
        selector: 'stat_tour',
        content: 'Số lượt click của các link cũng như social link sẽ được hiển thị trong phần Stat.',
        path: '/dashboard/stat'
    },
    {
        selector: 'setting_tour',
        content: 'Phần setting sẽ cho phép cậu cài đặt cho tài khoản của mình.',
        path: '/dashboard/setting'
    },
    {
        selector: 'phone_tour',
        content: 'Các thay đổi của cậu sẽ được hiển thị tại đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'profile_tour',
        content: 'Đây là nơi bạn có thể xem profile của mình trên toàn màn hình >_<.',
        path: '/dashboard/link'
    },
    {
        selector: 'instruc_tour',
        content: 'Nên nhớ là Khanh Noi luôn ở đây nha.',
        path: '/dashboard/link'
    },
    {
        selector: '',
        content: 'Vậy là chuyến thăm quan được thực hiện bởi Khanh Noi đến đây kết thúc rùi :( Noi hy vọng cậu sẽ có một khoảng thời gian vui vẻ khi trải nghiệm GHTKlink được thực hiện bởi sieu nhan cuong phong! nha.',
        path: '/'
    },
]

export default function WebTour() {

    const { isTouring } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    return (
        <>
            {isTouring ?
                <Tour
                    steps={steps}
                    onRequestClose={() => {
                        dispatch({
                            type: 'TOGGLE_TOUR'
                        })
                    }}
                /> : ''}
        </>

    )
}
