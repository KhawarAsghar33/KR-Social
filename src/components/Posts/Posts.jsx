import './Posts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';
import { Users } from '../../dummyData';

function Posts({post}) {
    
    /* const user = Users.filter((u) => u.id === post.userId)
    console.log(user[0].username) */
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src="images/awert321.jpeg" alt='awer321' className='postProfileImg' />
                        <span className='postUsername'>Khawar Asghar</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                    <FontAwesomeIcon icon={faListUl} className="Icon" />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img src={post.photo} alt='001' className='postImg' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                    <img src="images/like.png" alt='heart' className='likeicon' />
                    <img src="images/heart.png" alt='heart' className='hearticon' />
                    <span className='postLikeCounter'>{post.like}</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
