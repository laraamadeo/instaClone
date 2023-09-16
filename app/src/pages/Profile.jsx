import { useState, useContext } from "react"
import ProfileInformation from "../components/profile/ProfileInformation"
import ProfileTabs from "../components/profile/ProfileTabs"
import ProfilePosts from "../components/profile/ProfilePosts"
import ProfileSavedPosts from "../components/profile/ProfileSavedPosts"
import './Profile.css'
import Header from "../components/Header"
import TopbarMenu from "../components/TopbarMenu"
import Context from "../Context"
import SidebarMenu from "../components/SidebarMenu"

export default function Profile() {

    const [view, setView] = useState('profilePosts')


    const handleShowProfilePosts = () => {
        setView('profilePosts')
    }

    const handleShowProfileSaved = () => {
        setView('profileSaved')
    }

    const [lastUserRenderUpdate, setLastUserRenderUpdate] = useState(Date.now())
    const [mobileSidebar, setMobileSidebar] = useState(null)

    const { navigate } = useContext(Context)

    const handleGoToSettings = () => {
        navigate('/settings')
    }

    const handleGoToHome = () => {
        navigate('/')
        setMobileSidebar(null)
    }

    const handleGoToProfile = () => {
        navigate('/profile')
    }

    const handleOpenSidebar = () => {
        setMobileSidebar('open')

    }

    const handleCloseSidebar = () => {
        setMobileSidebar(null)
    }



    return <>


        <div className="m-0 w-full relative">
            {<TopbarMenu
                lastUserRenderUpdate={lastUserRenderUpdate}
                onSettingsButton={handleGoToSettings}
                onProfileAvatarButton={handleGoToProfile}
                onBurguerButton={handleOpenSidebar} />}
            <div className="m-0 w-full flex flex-row items-center relative">
                {mobileSidebar === 'open' && <SidebarMobile onCloseSidebarButton={handleCloseSidebar} onHomeMobileSidebarRow={handleGoToHome} sidebarToggle={mobileSidebar} />}
                <div className="h-screen w-[230px] flex items-end fixed top-0 max-md:hidden">
                    {<SidebarMenu lastUserRenderUpdate={lastUserRenderUpdate} onSettingsRow={handleGoToSettings} onHomeRow={handleGoToHome} onProfileComponent={handleGoToProfile} />}
                </div>
                <div className="w-[calc(100%-230px)] max-md:w-full flex flex-row m-0 relative left-[230px] max-md:left-0">
                    <div className="w-[60%] max-xl:w-full border-r border-[--grey-100] max-lg:border-0 px-4 pt-4">
                        <Header title={'Profile'} secondaryButtonText={'Edit'} />
                        <ProfileInformation />
                        <ProfileTabs state={view} onPostsTabClick={handleShowProfilePosts} onSavedTabClick={handleShowProfileSaved} />
                        {view === 'profilePosts' && <ProfilePosts />}
                        {view === 'profileSaved' && <ProfileSavedPosts />}        </div>
                    <div className="min-w-[300px] h-screen max-lg:hidden"></div>
                </div>

            </div>
        </div>
    </>







}