import JoinUs from '../../components/JoinUs';
import RolesCarousel from '../../components/RolesCarousel';
import MailingList from '../../components/MailingList';
import { fetchContent } from '../../api/apiRoot';

export async function getStaticProps() {
  const roles = await fetchContent('role');

  return { props: { roles } };
}

const Join = ({ roles }) => {
  return (
    <div>
      <JoinUs />
      <RolesCarousel roles={roles} />
      <MailingList />
    </div>
  );
};

export default Join;
