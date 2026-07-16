import JoinUs from '../../components/JoinUs';
import RolesCarousel from '../../components/RolesCarousel';
import MailingList from '../../components/MailingList';
import { fetchContent } from '../../api/apiRoot';

export async function getStaticProps() {
  const roles = await fetchContent('role');

  const JOIN_ONE = await fetchContent('joinPageExhibitOne');
  //Assigning classes for images for zigzag effect
  JOIN_ONE.forEach(
    (image, index, joinOne) => {
      if( index%2==1 ){
        joinOne[index].classes = 'mt-10';
      }else{
        joinOne[index].classes = '';
      }
    }
  );

  const JOIN_TWO = await fetchContent('joinPageExhibitTwo');
  //Again, Assigning classes for images for zigzag effect
  JOIN_TWO.forEach(
    (image, index, joinOne) => {
      if( index%2==1 ){
        joinOne[index].classes = 'mt-10';
      }else{
        joinOne[index].classes = '';
      }
    }
  );

  return { props: { roles, JOIN_ONE, JOIN_TWO } };
}

const Join = ({ roles, JOIN_ONE, JOIN_TWO }) => {
  return (
    <div>
      <JoinUs JOIN_ONE={JOIN_ONE} JOIN_TWO={JOIN_TWO} />
      <RolesCarousel roles={roles} />
      <MailingList />
    </div>
  );
};

export default Join;
