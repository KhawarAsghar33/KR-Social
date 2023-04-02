import './Rightbar.css'
import {Users} from '../../dummyData'
import Online from '../Online/Online'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='images/gift.png' alt='gift' />
          <span className='birthdayText'><b>Ramzan</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <img className='rightbarAd' src='images/Ad.jpg' alt='Ad' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
