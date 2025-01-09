import './BecomeTechShowcase.css'
import becometechbanner from '../../../../assets/images/modern-prodigy-disassembling-electronics 15.png'
import Showcase from '../../Showcase/Showcase'

function BecomeTechShowcase() {
  return (
    <>
      <Showcase 
        title='Become a' 
        highlights='Tech' 
        backgroundImage={'/become-tech-banner.png'} 
        paragraph='Are you ready to kickstart your career in technology? At Geekify, we provide hands-on opportunities to 
          explore, learn, and grow in an innovative and fast-paced environment. Whether you are passionate about solving problems or building cutting-edge solutions this is your chance to join a dynamic 
          team where your skills will truly make an impact.'
      />
    </>
  )
}

export default BecomeTechShowcase