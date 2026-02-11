import MeetOurTeam from '../../components/MeetOurTeam';
import { fetchContent } from '../../api/apiRoot';

export async function getStaticProps(){
  const alumni = await fetchContent('alumni');

  alumni.sort((a,b) => a.orderNumber - b.orderNumber);

  return{
    props: {
      alumni,
    },
    revalidate: 60,
  };

}


const OurTeam = ({ alumni }) => {
  return <MeetOurTeam alumni={alumni} />;
};

export default OurTeam;
