import React, { useState } from 'react'
import Tour from './Tour'


const steps = [
    {
        selector: '',
        content: 'Chào cậu! mình là Khanh Noi >_< - hướng dẫn viên tại GHTKlink! Mình sẽ hướng dẫn cậu đi thăm quan và giới thiệu cho cậu hiểu rõ hơn về GHTKlink nhé! Được rồi đi thôi!',
        path: ''
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
        content: 'Và cuối cùng là một số cài đặt cho tài khoản của cậu.',
        path: '/dashboard/setting'
    },
    {
        selector: '',
        content: 'Chuyến thăm quan được thực hiện bởi Khanh Noi đến đây kết thúc rùi :( Noi hy vọng cậu sẽ có một khoảng thời gian vui vẻ khi trải nghiệm GHTKlink được thực hiện bởi sieu nhan cuong phong! nha.',
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
                () => { setIsTouring(false) }
            }
        />
    )
}
