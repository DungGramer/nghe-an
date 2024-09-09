import Footer2 from "../Footer-2";
import ModNav from "../mod-nav";
import Section1 from "../section-1";
import Section2 from '../section-2';
import BlogSlider from "../section-3";
import Hero2 from '../Hero-2';

const Main = () => {
  return (
    <div className='h-full min-h-full'>
      <Section1 />
      <Hero2 />
      <Section2 />
      <ModNav />
      <BlogSlider />
      <Footer2 />
    </div>
  );
};

export default Main;
