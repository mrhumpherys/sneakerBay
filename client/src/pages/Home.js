import React from "react";
import Hero from '../components/Hero/';
import Bar from '../components/Bar';
import SearchResult from '../components/Results';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SHOES } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_SHOES, {
    pollInterval: 500,
  });
    const shoes = data?.shoes || [];
    // console.log("hello");

  return (
    <div className="">
  {/* <Navbar /> */}
        <Hero />
        <Bar />
        {/* <Searchbar /> */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SearchResult shoes={shoes}/>
        )}
        
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