import React, { useState } from 'react'
import Tour from './Tour'

// Khanh noi

const steps = [
    {
        selector: '',
        content: 'Chào mừng bạn đến với GHTK link!',
        path: ''
    },
    {
        selector: 'navigation',
        content: 'Đây là nơi bạn có thể di chuyển giữa các thành phần trên trang web.',
        path: '/dashboard/link'
    },
    {
        selector: 'add_link_tour',
        content: 'Các link hoặc plugin có thể thêm mới tại đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'header_tour',
        content: 'Header của các link cũng là 1 sự lựa chọn không tồi.',
        path: '/dashboard/link'
    },
    {
        selector: 'link_tour',
        content: 'Các link của bạn sẽ hiển thị ở đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'social_tour',
        content: 'Quản lý các link social nằm ở đây.',
        path: '/dashboard/link'
    },
    {
        selector: 'design_tour',
        content: 'Bạn cũng có thể sửa tên và mô tả.',
        path: '/dashboard/design'
    },
    {
        selector: 'theme_tour',
        content: 'Hoặc lựa chọn theme theo sở thích của mình.',
        path: '/dashboard/design'
    },
    {
        selector: 'themeCreate_tour',
        content: 'Tạo mới theme cũng là một sự lựa chọn không tồi.',
        path: '/dashboard/design'
    },
    {
        selector: 'stat_tour',
        content: 'Số lượt click của các link cũng như social link sẽ được hiển thị tại đây.',
        path: '/dashboard/stat'
    },
    {
        selector: 'setting_tour',
        content: 'Và cuối cùng là một số cài đặt cho tài khoản của bạn.',
        path: '/dashboard/setting'
    },
    {
        selector: '',
        content: 'Hy vọng các bạn sẽ có một thời gian vui vẻ khi trải nghiệm GHTKlink của sieu nhan cuong phong!.',
        path: '/dashboard/link'
    },
]

export default function WebTour() {

    const [isTouring, setIsTouring] = useState(true)

    return (
        <Tour
            steps={steps}
            isOpen={isTouring}
            onRequestClose={
                ()=>{setIsTouring(false)}
            }
        />
    )
}
