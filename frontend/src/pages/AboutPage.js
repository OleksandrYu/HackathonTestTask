import UserInfo from "../components/UserInfo/UserInfo";
import userIcon from '../assets/icons/userIcon.png'

const AboutPage = () => {
  return <UserInfo icon = {userIcon} username = 'Mafusaillo' mail= 'dpo.prots@gmail.com' spending = "5000" balance = "10000"/>
};

export default AboutPage;