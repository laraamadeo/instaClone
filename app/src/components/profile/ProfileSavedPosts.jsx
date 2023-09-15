import { useEffect, useState } from "react"
import ProfileSavedPost from "./ProfileSavedPost"
import './ProfileSavedPosts.css'
import retrieveSavedPosts from "../../logic/retrieveSavedPosts"
import { useContext } from "react"
import Context from "../../Context"
export default function ProfileSavedPosts() {

    const [savedPosts, setSavedPosts] = useState()
    const { generateToast } = useContext(Context)

    useEffect(() => {
        try {
            retrieveSavedPosts()
                .then(posts => {
                    setSavedPosts(posts)
                })
                .catch(error => {
                    generateToast(error.message, 'error')
                })
        } catch (error) {
            generateToast(error.message, 'error')
        }
    }, [])

    return <>
        {savedPosts && <div className="flex flex-wrap w-full h-fit gap-[8px] box-border">
            {savedPosts.map(post => <ProfileSavedPost key={post.id} post={post} />)}
        </div>}
    </>
}