import profile from '../assets/profile.gif'

const ContactList = [
  { title: "EDUCATION",content: ["한성대학교 컴퓨터공학부", "2022.03 ~ 2026.02"]},
  { title: "SKILLS", content: ["Python", "Java", "JavaScript"]},
  { title: "WORK", content: ["프론트엔드 개발자"]},
  { title: "ACTIVITIES", content: ["멋쟁이사자처럼 14기 프론트엔드"]}
]

function My(){
  return (
    <section id = 'about'>
      <h2 className='section-title'>ABOUT</h2>
      <div className='about-inner'>

        <div className='profile-card'>
          <img src={profile} alt = '최용주 프로필사진' className='profile-img'/>
          <div className='profile-name'>최용주</div>
          <div className='profile-info'>
            <span><span className="icon">📞</span> 010-7369-4273</span>
            <span><span className="icon">✉️</span> 2271289@hansung.ac.kr</span>
            <span><span className="icon">📍</span> 경기도 양주시 옥정동</span>
          </div>     
        </div>

        <div className='about-details'>
            {ContactList.map(({title, content}) => (
              <div className = 'detail-block' key = {title}>
              <h3>{title}</h3>
              <p>
                {content.map((item, i) => ( 
                  <span key={i}>{item}{i < content.length - 1 && <br />}</span>
                ))}
              </p>
          </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default My;