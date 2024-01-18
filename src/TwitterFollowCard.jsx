import { useState } from 'react'

export function TwitterFollowCard ({ userName = 'unknow', children, initialIsFollowing }){

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const formatUserName = (userName) => `@${userName}`
  const imageSrc = `https://unavatar.io/${userName}`

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          alt="El avatar de un random" 
          src={imageSrc}
        />
        <div className='tw-followCard-info'>
            <strong>{children}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button 
          className={buttonClassName}
          onClick={handleClick}
        >
          <span className='tw-followCard-text'>
            {text}
          </span>
        <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}