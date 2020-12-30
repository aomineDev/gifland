import Container from 'components/layout/Container'
import Verified from 'components/Verified'

import './styles.css'

export default function Profile ({ user }) {
  const bannerUrl = 'https://images.unsplash.com/photo-1607879891122-cbdb343ca383?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnxibzhqUUtUYUUwWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=60'

  if (!user) return false

  return (
    <>
      <Container withHeader withoutCenter>
        <div className="Profile-banner">
          <img src={user.banner_url || bannerUrl} alt="banner avatar"/>
        </div>
      </Container>

      <Container>
        <div className="Profile">
          <div className="Profile-avatar">
            <img src={user.avatar_url} alt="user avatar"/>
          </div>
          <div className="Profile-info">
            <a
              href={user.profile_url}
              target="_blank"
              rel="noreferrer"
              className="Profile-display-name"
            >
              {user.display_name}
            </a>
            <div className="Profile-name-wrapper">
              <span className="Profile-name">@{user.username}</span>
              <Verified isVerified={user.is_verified} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}