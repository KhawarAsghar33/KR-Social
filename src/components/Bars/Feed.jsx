import './Feed.css'
import Share from '../Share/Share'
import Posts from '../Posts/Posts'
import { Post } from '../../dummyData' 

function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Post.map(p=>(
          <Posts key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed
