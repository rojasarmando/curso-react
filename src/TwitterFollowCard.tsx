
interface TwitterFollowCardProps {
  username: string;
  name: string;
}

export function TwitterFollowCard({ username , name  }: TwitterFollowCardProps){
    const img = `https://unavatar.io/${username}`;
    return (
        <article className="tw-followCard">
          <header className="tw-followCard-header">
            <img
              src={img}
              alt="foto de perfil"
              className="tw-followCard-avatar"
            />
            <div className="tw-followCard-info">
              <strong>{name}</strong>
              <span className="tw-followCard-infoUserName">@{username}</span>
            </div>
          </header>
          <aside>
            <button  className="tw-followCard-button" >Seguir</button>
          </aside>
        </article>
      ); 
}