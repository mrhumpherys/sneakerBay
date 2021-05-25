import React from "react";
import Hero from '../components/Hero/';
import Bar from '../components/Bar';
import Searchbar from '../components/Searchbar';
import SearchResult from '../components/Results';

const Home = () => {
  return (
    <div className="">
  {/* <Navbar /> */}
        <Hero />
        <Bar />
        <Searchbar />
        <SearchResult />
    </div>
  );
};
// const Home = () => {
//   const [currentCategory, setCategory] = useState("");

//   return (
//     <div className="container">
//       <CategoryMenu setCategory={setCategory} />
//       <ProductList currentCategory={currentCategory} />
//     </div>
//   );
// };

export default Home;