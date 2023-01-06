import { MdShoppingBasket, MdAdd, MdLogout } from 'react-icons/md'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, login, logout } from '../features/state/stateSlice'
import { useState } from 'react'

function Header() {
  const [isMenu, setIsMenu] = useState(false)

  const dispatch = useDispatch()

  const user = useSelector(getUser)

  return (
    <header className='fixed w-screen z-50 p-3 px-4 md:p-6 md:px-16 bg-primary shadow-sm'>
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to='/' className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-10 object-contain' />

          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8'
          >
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Home
            </li>

            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Menu
            </li>

            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              About Us
            </li>

            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
              Service
            </li>
          </motion.ul>

          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />

            <div className='w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>

          <div className='relative'>
            <motion.img
              onClick={function () {
                return !user
                  ? dispatch(login())
                  : setIsMenu(function (prev) {
                      return !prev
                    })
              }}
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt='user-profile'
              className='w-10 min-w-[40px] h-10 min-h-[40px] object-cover drop-shadow-2xl cursor-pointer rounded-full'
            />

            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 top-12 right-0 shadow-xl rounded-lg absolute flex flex-col'
              >
                {user && user.email === 'lasisiolalekan081@gmail.com' && (
                  <Link to='/createItem'>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={function () {
                    setIsMenu(false)
                    return dispatch(logout())
                  }}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between md:hidden w-full h-full'>
        <div className='relative flex items-center justify-center'>
          <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />

          <div className='w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-2 -right-2'>
            <p className='text-xs text-white font-semibold'>2</p>
          </div>
        </div>

        <Link to='/' className='flex items-center gap-2'>
          <img src={Logo} alt='logo' className='w-10 object-contain' />

          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='relative'>
          <motion.img
            onClick={function () {
              return !user
                ? dispatch(login())
                : setIsMenu(function (prev) {
                    return !prev
                  })
            }}
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt='user-profile'
            className='w-10 min-w-[40px] h-10 min-h-[40px] object-cover drop-shadow-2xl cursor-pointer rounded-full'
          />

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 top-12 right-0 shadow-xl rounded-lg absolute flex flex-col'
            >
              {user && user.email === 'lasisiolalekan081@gmail.com' && (
                <Link to='/createItem'>
                  <p className='px-4 py-2 flex items-center cursor-pointer active:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base'>
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className='flex flex-col'>
                <li className='text-base text-textColor hover:text-headingColor duration-100 active:bg-slate-300 px-4 py-2 transition-all ease-in-out cursor-pointer'>
                  Home
                </li>

                <li className='text-base text-textColor hover:text-headingColor duration-100 active:bg-slate-300 px-4 py-2 transition-all ease-in-out cursor-pointer'>
                  Menu
                </li>

                <li className='text-base text-textColor hover:text-headingColor duration-100 active:bg-slate-300 px-4 py-2 transition-all ease-in-out cursor-pointer'>
                  About Us
                </li>

                <li className='text-base text-textColor hover:text-headingColor duration-100 active:bg-slate-300 px-4 py-2 transition-all ease-in-out cursor-pointer'>
                  Service
                </li>
              </ul>

              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center gap-3 cursor-pointer active:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base justify-center bg-gray-200'
                onClick={function () {
                  setIsMenu(false)
                  return dispatch(logout())
                }}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
