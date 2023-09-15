import SettingsMenu from "../components/settings/SettingsMenu.jsx"
import UpdateEmail from "../components/settings/UpdateEmail.jsx"
import UpdatePassword from "../components/settings/UpdatePassword.jsx"
import UpdateAvatar from "../components/settings/UpdateAvatar.jsx"
import { useState } from "react"
import './Settings.css'
import Header from "../components/Header.jsx"

export default function Settings({ onSidebarUpdates }) {


    const [view, setView] = useState('menu')

    const handleGoToUpdateEmail = () => {
        setView('email')
    }

    const handleGoToUpdatePassword = () => {
        setView('password')
    }

    const handleGoToUpdateAvatar = () => {
        setView('avatar')
    }

    const returnToSettingsMenu = () => {
        setView('menu')

        onSidebarUpdates()
    }



    return <div className="w-full h-screen flex flex-col items-start mt-[40px] px-[40px] border-box">
        {<Header title={'Settings'} />}
        <div className="w-full h-screen flex justify-center">
            {view === 'menu' && <SettingsMenu onEmailRowClick={handleGoToUpdateEmail} onPasswordRowClick={handleGoToUpdatePassword} onAvatarRowClick={handleGoToUpdateAvatar} />}
            {view === 'email' && <UpdateEmail onSaveUpdateEmailClick={returnToSettingsMenu} onCancelUpdateEmailClick={returnToSettingsMenu} />}
            {view === 'password' && <UpdatePassword onSaveUpdatePasswordClick={returnToSettingsMenu} onCancelUpdatePasswordClick={returnToSettingsMenu} />}
            {view === 'avatar' && <UpdateAvatar onSaveUpdateAvatarClick={returnToSettingsMenu} onCancelUpdateAvatarClick={returnToSettingsMenu} />}
        </div>
    </div>

}
