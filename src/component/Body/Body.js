/** @format */
import Resturent, { withPramoted } from "../../component/Resturent/Resturent";
import useOnlineStatus from "../../Hook/useOnlineStatus";
import useUserDetails from "../../Hook/useUserDetails";
import { card } from "../../utils/constant";
import { useState } from "react";

const Body = () => {
  let [list, setList] = useState(card);
  const [searchItem, setSearchItem] = useState("");
  const { error, data } = useUserDetails();
  let [filterData, setFilterData] = useState(card);
  const [isOnlineStatus] = useOnlineStatus();
  const PramotedResturent = withPramoted(Resturent);
  return list == "" ? (
    <div>Data not found.....</div>
  ) : (
    <div className='boddy'>
      <input
        type='text'
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          filterData = filterData.filter((res) => res.rating == searchItem);
          setList(filterData);
        }}>
        Search
      </button>
      <div
        className='search'
        onClick={() => {
          list = list.filter((res) => res.rating > 4);

          setList(list);
        }}>
        Top Raited food
        <h1>
          OnLine status: Online status: Online status:{" "}
          {isOnlineStatus ? "📶" : "❌"}
        </h1>
      </div>
      <div className='res-container'>
        {list.map((obj, i) => (
          <>
            {/* {i == 1 ? (
              <PramotedResturent objData={obj} key={i + obj.name + "pro@"} />
            ) : ( */}
            <Resturent objData={obj} key={i} />
            {/* )} */}
          </>
        ))}
      </div>
    </div>
  );
};
export default Body;
