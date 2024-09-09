import Footer2 from "../Footer-2";
import ModNav from "../mod-nav";
import Section1 from "../section-1";
import Section2 from '../section-2';
import BlogSlider from "../section-3";

const Main = () => {
  return (
    <div className='h-full min-h-full'>
      <Section1 />
      <Section2 />
      <BlogSlider />
      <ModNav />
      <Footer2 />
    </div>
  );
};

export default Main;
