import './Leftbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBriefcase, faCalendarDays, faCommentDots, faGraduationCap, faQuestion, faRss, faUserGroup, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='leftbarwrapper'>
        <ul className='leftbarList'>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faRss} className='leftbarIcon' />
            <span className='leftbarListItemsText'>Feed</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faCommentDots} className='leftbarIcon' />
            <span className='leftbarListItemsText'>Chats</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faVideoCamera} className='leftbarIcon' />
            <span className='leftbarListItemsText'>Videos</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faUserGroup} className='leftbarIcon' />
            <span className='leftbarListItemsText'>Groups</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faBookBookmark} className='leftbarIcon' style={{ marginRight: '20px' }} />
            <span className='leftbarListItemsText'>Bookmarks</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faQuestion} className='leftbarIcon' style={{ marginRight: '24px' }} />
            <span className='leftbarListItemsText'>Questions</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faBriefcase} className='leftbarIcon' style={{ marginRight: '20px' }} />
            <span className='leftbarListItemsText'>Jobs</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faCalendarDays} className='leftbarIcon' style={{ marginRight: '21px' }} />
            <span className='leftbarListItemsText'>Events</span>
          </li>
          <li className='leftbarListItems'>
            <FontAwesomeIcon icon={faGraduationCap} className='leftbarIcon' />
            <span className='leftbarListItemsText'>Courses</span>
          </li>
        </ul>
        <Button variant="outline-dark" size='sm' className='leftbarButton'>Show More</Button>
        <hr className='leftbarHr' />
        <ul className='leftbarFriendList'>
          <li className='leftbarFriend'>
            <img src="images/kunan321.jpg" alt='kunan321' className='leftbarFriendImg' />
            <span className='leftbarFriendName'>Kunan</span>
          </li>
          <li className='leftbarFriend'>
            <img src="images/003.jpg" alt='kunan321' className='leftbarFriendImg' />
            <span className='leftbarFriendName'>Asghar Bhatti</span>
          </li>
          <li className='leftbarFriend'>
            <img src="images/004.jpg" alt='kunan321' className='leftbarFriendImg' />
            <span className='leftbarFriendName'>Abdullah Afzal</span>
          </li>
          <li className='leftbarFriend'>
            <img src="images/005.jpg" alt='kunan321' className='leftbarFriendImg' />
            <span className='leftbarFriendName'>Ramzan Khan</span>
          </li>
          <li className='leftbarFriend'>
            <img src="images/002.jpg" alt='kunan321' className='leftbarFriendImg' />
            <span className='leftbarFriendName'>Afzal Bhatti</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
