import Heading from './Heading';
import { UnderlineTypes } from '../utils/underlineType';

const UnderConstruction = () => {
  return (
    <section className="h-screen p-12">
      <Heading underlineType={UnderlineTypes.IGE_SHORT_UNDERLINE_DIR}>Under Construction</Heading>
    </section>
  );
};

export default UnderConstruction;
