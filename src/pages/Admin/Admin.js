import { Breadcrumb, Input, Layout, Menu, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'; import { Space, Table, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/Actions/AdminAction';
import { useSelector } from 'react-redux';



export default function Admin() {
    const { Content } = Layout;

    const dispatch = useDispatch()
    const { userList } = useSelector(state => state.AdminReducer)
    const [userEditId, setUserEditId] = useState(-1)
    const [userEdit, setUserEdit] = useState({
        values: {
            name: '',
            bio: '',
            email: '',
        },
        errors: {
            name: '',
            bio: '',
            email: '',
        }
    })

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const handleChange = (e) => {
        const { value, name } = e.target
        let newValue = { ...userEdit.values, [name]: value }
        let newError = { ...userEdit.errors }

        if (value.trim() === '') {
            newError[name] = name + ' is required!'
        } else {
            newError[name] = ''
        }

        setUserEdit({
            values: newValue,
            errors: newError
        })
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'User name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => {
                return <div>
                    {userEditId === record.id ?
                        <div style={{ position: 'relative' }} >
                            <Input defaultValue={record.name} name='name' allowClear onChange={handleChange} />
                            <span className='text-red-400' style={{ position: 'absolute', bottom: -23, left: 0 }}>{userEdit.errors.name}</span>
                        </div>
                        : <p>{record.name}</p>}
                </div>
            }
        },
        {
            title: 'Bio',
            dataIndex: 'bio',
            key: 'bio',
            render: (text, record) => {
                return <div>
                    {userEditId === record.id ?
                        <div style={{ position: 'relative' }} >
                            <Input defaultValue={record.bio} name='bio' allowClear onChange={handleChange} />
                            <span className='text-red-400' style={{ position: 'absolute', bottom: -23, left: 0 }}>{userEdit.errors.bio}</span>
                        </div>
                        : <p>{record.bio}</p>}
                </div>
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Email confirm',
            dataIndex: 'enabled',
            key: 'enabled',
            render: (_, record) => {
                let color = record.enabled ? 'geekblue' : 'volcano';

                return <Tag className='text-center' color={color} key={record.id}>
                    {record.enabled ? 'True' : 'False'}
                </Tag>
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                let color = record.status ? 'geekblue' : 'volcano';

                return <Tag className='text-center' color={color} key={record.id}>
                    {record.status ? 'True' : 'False'}
                </Tag>
            },
        },
        {
            title: 'Created at',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Role',
            key: 'role',
            dataIndex: 'role',
            render: (_, record) => {
                let color = record.role === "ROLE_USER" ? 'geekblue' : 'volcano';

                return <Tag className='text-center' color={color} key={record.id}>
                    {record.role === "ROLE_USER" ? 'User' : 'Admin'}
                </Tag>
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a className='text-yellow-400 hover:underline'>Active</a>
                    <a className='text-red-400 hover:underline'>Delete</a>
                    {userEditId !== record.id ? <a className='text-green-400' onClick={() => {
                        setUserEditId(record.id)
                        setUserEdit({
                            values: {
                                name: '',
                                phoneNumber: '',
                                email: '',
                            },
                            errors: {
                                name: '',
                                phoneNumber: '',
                                email: '',
                            }
                        })
                    }}>Edit</a> : ''}

                    {userEditId === record.id ?
                        <div className='d-flex flex-column align-items-center'>
                            <Popconfirm
                                placement="bottom"
                                title={'Save changes ?'}
                                onConfirm={() => { }}
                                okText="Yes"
                                cancelText="No">
                                <span style={{ color: '#929398', cursor: 'pointer', marginRight: '5px' }}>Save</span>
                            </Popconfirm>
                            <span style={{ color: '#929398', cursor: 'pointer' }} onClick={() => {
                                setUserEditId(-1)
                            }}>Cancel</span>
                        </div> : ''}
                </Space>
            ),
        },
    ];

    const myList = [
        {
            id: 1,
            username: 'quannt86',
            name: 'quan',
            bio: 'st',
            email: 'quangaobn@gmail.com',
            enabled: true,
            status: true,
            createdAt: 12 / 2 / 2022,
            role: 'ROLE_USER'
        },
        {
            id: 2,
            username: 'abc',
            name: 'asdasd',
            bio: 'asdasd',
            email: 'asdasda@gmail.com',
            enabled: false,
            status: true,
            createdAt: 12 / 2 / 2022,
            role: 'ROLE_ADMIN'
        }
    ]

    return <Layout style={{ minHeight: '100vh' }}>
        <div className='border-b-2 border-gray-100 w-full z-40'>
            <div className='bg-white flex justify-between items-center px-16' style={{ height: "60px" }}>
                <div className='cursor-pointer'>
                    <svg width="34" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0706 14.9791V12.4128C14.0706 12.0534 13.8765 11.8737 13.4883 11.8737H11.7199V15.5182H13.4883C13.8765 15.5182 14.0706 15.3385 14.0706 14.9791ZM14.0706 20.8233V18.1492C14.0706 17.9623 14.0274 17.8329 13.9412 17.761C13.8549 17.6748 13.7039 17.6316 13.4883 17.6316H11.7199V21.3625H13.4883C13.8765 21.3625 14.0706 21.1827 14.0706 20.8233ZM8.6792 9.76025H14.3725C16.1983 9.76025 17.1113 10.551 17.1113 12.1325V14.5478C17.1113 15.6117 16.7878 16.2802 16.1408 16.5534C16.7878 16.7978 17.1113 17.416 17.1113 18.408V21.0821C17.1113 22.678 16.1983 23.4759 14.3725 23.4759H8.6792V9.76025Z" fill="black"></path><path d="M19.0001 9.76025H22.0624V23.4759H19.0001V9.76025Z" fill="black"></path><path d="M26.7266 9.76025H29.6164C31.4279 9.76025 32.3336 10.551 32.3336 12.1325V21.0821C32.3336 22.678 31.4279 23.4759 29.6164 23.4759H26.7266C24.9007 23.4759 23.9878 22.678 23.9878 21.0821V12.1325C23.9878 10.551 24.9007 9.76025 26.7266 9.76025ZM29.2498 20.6724V12.5638C29.2498 12.2043 29.0629 12.0246 28.6891 12.0246H27.6539C27.2657 12.0246 27.0717 12.2043 27.0717 12.5638V20.6724C27.0717 21.0318 27.2657 21.2115 27.6539 21.2115H28.6891C29.0629 21.2115 29.2498 21.0318 29.2498 20.6724Z" fill="black"></path><path d="M36.1149 23.4396C35.0876 23.4396 34.2549 22.6069 34.2549 21.5796V21.4596C34.2549 20.4324 35.0876 19.5996 36.1149 19.5996C37.1421 19.5996 37.9749 20.4324 37.9749 21.4596V21.5796C37.9749 22.6069 37.1421 23.4396 36.1149 23.4396Z" fill="black"></path><path d="M11.7537 38.023H15.7002V40.2874H8.69141V26.5718H11.7537V38.023Z" fill="black"></path><path d="M16.7589 26.5718H19.8212V40.2874H16.7589V26.5718Z" fill="black"></path><path d="M27.5693 26.5718H30.3943V40.2874H27.634L24.6364 32.071V40.2874H21.8328V26.5718H24.6148L27.5693 34.7666V26.5718Z" fill="black"></path><path d="M41.4213 26.5718L38.661 33.3433L41.4213 40.2874H38.1003L35.4477 33.3433L38.1003 26.5718H41.4213ZM32.3207 40.2874V26.5718H35.383V40.2874H32.3207Z" fill="black"></path><path d="M1 1H49V49H1V1Z" stroke="black" strokeWidth="2" strokeLinejoin="round" className="svg-log-bg"></path></svg>
                </div>
                <div className='flex gap-4 items-center'>
                    <NavLink to={'/profile/username'} className='underline font-inter text-base text-blue-400 cursor-pointer profile_tour'>My profile</NavLink>
                    <NavLink to={'/dashboard/link'} className='underline font-inter text-base text-blue-400 cursor-pointer profile_tour'>DashBoard</NavLink>
                    <div>
                        <div className="flex items-center rounded-sm px-3 select-none py-1 cursor-pointer justify-center font-inter text-14 border hover:bg-gray-100"><div>Share</div></div>
                    </div>
                    <div style={{ width: '36px', height: '36px' }}>
                        <div alt="Quân Nguyễn Thế" className="object-cover ml-auto rounded-full transform scale-105 cursor-pointer hover:scale-90 duration-100" >
                            <img className='h-full w-full ' src="https://cdn.bio.link/uploads/profile_pictures/2022-06-24/uypEvJN3i7IAPaRcpuIgeBs3qlxRAeDD.png" alt="Quân Nguyễn Thế" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Content style={{ padding: '20px 50px 70px', }}>
            <Breadcrumb>
                <Breadcrumb.Item>Admin</Breadcrumb.Item>
                <Breadcrumb.Item>User management</Breadcrumb.Item>
            </Breadcrumb>
            <div className='p-4 bg-white h-full mt-4'>
                <Table columns={columns} dataSource={userList} rowKey={'id'} />
            </div>
        </Content>
    </Layout>
};
