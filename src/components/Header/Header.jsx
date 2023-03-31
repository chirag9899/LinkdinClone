import { Search, Home, SupervisorAccount, Notifications, Chat, BusinessCenter } from '@mui/icons-material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';
import HeaderOption from '../HeaderOption/HeaderOption';
import './Header.css';
import {useDispatch} from 'react-redux';
import { logout} from '../../features/userSlice';


const Header = () => {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth).then(() => {
        alert('Signed out successfully');
    }).catch((error) => {
        alert(error.message)
    });
  };

  return (

    <div className='header'>

        <div className="headerLeft">

            <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAMAAAD1LOYpAAAAZlBMVEUAd7f///8AdLYAbLLu9fre7vWtyeADcLRblscPgLzO4O4kfbrk7vU4h79+qtAAcrWbvdsAaLBgncqMtdaEsNOewt1vo80AZa8AYq40gbzZ5/G20eVFjsP4/f4pg72lw97B1+hsnMm67Y3WAAAEwUlEQVR4nO2da5uyIBCGYTApT5SabSZl//9PvmbbdlBO5Rt4XTwf9hPavcNpmAFE+KYkKvI0Rg4oTvMiSv7A0A2wTAllYJvuKmCUpGXyhMi3MXUE7yag8ZbfEYNq4xjgRbCpghtiUBHbOOMiPWOHyF0lvDDyHnG7sU0i1mZ7QUxiB9vhTRAnHWJJbXPIREuMktRhI3ZmTBMUOdtXriIRKpyu566mC5Qz2xBysRy53RQvjRE54dvI5DygpgCcbgyM/OzoCl3+OskJbF+Fv55lXSyRe+MTOZ5qfBePMurWCAWQBfhFdeqSIdk+egW8qHSnRbK0HiPE+LSzjfYrSBfjhB2jI3VNBTbs69qJPkO3YkLMUwcY2XLQlx8VOVDV9CAjxPxsnRH2UkKMW9uEiJwUiEFje3QkiQLR+qoRUmln6WvacnSAVVyFmFieYmihIsTc8sqWrpWI2HJbnAPiDCpa3V0Cyz0aGiWi7UEHMeW4aD0QtJF7EV1TXNqeACFVIEb2gxhsdGV1l+0pGimnwIUDXrfCp126gAhI0qlD+9V8EW2EjK3t3nwTzQWMkSvpVqEdDy4lkigKB/06ydxKuQKp2ifAYO1UYKwXg3SbBJxjzoOgzZxLq/cCQlZ5lWVVw4hzFvwTMNrJRft5eb0p6Hpcr65xEzLJJAXdi1417DZjpYbFgOzoMV+H4aGNoqg9hEW+2mw+7IQQn9dDla8xMdqUo8Ue/TVg++V6MZiqeFs26ANKaMY9bx4+LaGhHHd++X0BBqQJRZHzjjJ+e0keC9cGxcM7oRKV4r+peKBpK11QJiW85yEz4W/j+sHXoa2w2NWtZHtVOLWDPL+VqZUEaoOHFSoTZmeuq0TSSJIjd4XvdG8SaiFSOSLNlHGNq+qVeWVPgkjU8aubFubR8ykQia4Ne0bjPPIEiKAOsD3/S4Z2nMKKyuDVs8LvIyqCLkNVZj7z54jmCsyGRxuI+GQ0F1pBDIzCllYQ8clk4LGDyE1Cq3YQn7woRxFrg0yEJURuEF21hGiyw8YWYqtNOD2ipkuR6DtlkyLW26w6n7PyoOFY5BYQeZtSdhVludK30E/dTYZY5+TBLpQWCkvqJ0CnQqzjl1GELuUPBD9fRoyG/hXJ5T3ny1YMxjbAMfnK+qjbX6ZBHD2OBCDdqaR9oGASxGjcIKSUPaSdpZ0EMRP9mqw1arveUyAKjNg9JX65wagzBaLQ+aOZDPGbVlyJrAiyTabtF9uieOsbxJJ4mbB5/AfEUNyoJGFJXGsSToFYiQc4IkPUje18jijbyyPbCZvoTi+fI8rOF8oCj19ErPfit8tGnS8iynZEzR1R99SfR/SIHtEjekSP6BE9okf0iB7RI3pEj+gRPaJH9Ige0SN6RI/oET3iPBDF11voHoOQvH0SRBDv+HlMGEu2EISSnSJwFO+O0M5HIyT68addkCA8Ri03BhFfb9Vob7IENJ7tXDzf6wTNeFXXql8SNKTEaIs82aHVQHT3YhzYwbDUsNhAdOztK7QzPK8BI3q/mM5j+u3QMdm/SEOheA6Xvs7g6lzr984oRIs5XOM8g8uwXbh5RqLLleJzuJh9Btfbz+EjATP41MIcPlgxh89+4Bl8PKWHdPUTNP8A/CdkEF8k7zwAAAAASUVORK5CYII="
                alt="linkedIn logo" 
            />

            <div className="headerSearch">
                <Search/>
                <input type="text" placeholder='Search...' />
            </div>

        </div>

        <div className="headerRight">
            <HeaderOption title="Home" Icon={Home} />
            <HeaderOption title="My Network" Icon={SupervisorAccount} />
            <HeaderOption title="Jobs" Icon={BusinessCenter} />
            <HeaderOption title="Messaging" Icon={Chat} />
            <HeaderOption title="Notification" Icon={Notifications} />
            <HeaderOption avatar={true} title='me' onClick={logoutOfApp} />
        </div>

    </div>

  )

};

export default Header;