import { useSelector } from "react-redux";
import Link from "next/link";
import { Div } from "../../stylesJs/home";
import { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import SearchBar from "../searchBar";
import { toTitleCase } from "../helper";
import Loading from "../LoadingSpinner";
function Page() {
  let data = useSelector((state) => state.placeholderReducer);
  const [search, setSearch] = useState("");

  const filterDataFunction = data?.placeholderData?.filter((item) => {
    if (search === "") {
      return item;
    } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });
  return data.loading === true ? (
    <Loading />
  ) : (
    <>
      <div className="container-fluid">
        <SearchBar
          search={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <h5 className="mt-3">
          {filterDataFunction.length !== 0 &&
            `${filterDataFunction.length} results
          found`}
        </h5>
        {filterDataFunction.map((item, index) => {
          return <Card key={item.id} item={item} />;
        })}
        {filterDataFunction.length === 0 && (
          <h6 className="text-center mt-5">
            Sorry! No results for your search
          </h6>
        )}
      </div>
    </>
  );
}

export default Page;

const Card = ({ item }) => {
  const [textSlice, setTextSlice] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onFocusCapture={() => setIsHover(true)}
        className="card border-0 shadow"
      >
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <Link href={`/post/${item.id}`}>
              <p>
                {item.id}-{toTitleCase(item.title)}
                {isHover == true && (
                  <span className="ms-1">
                    <RiArrowRightLine color="#28d" />
                  </span>
                )}
              </p>
            </Link>
            <footer className="blockquote-footer">
              {textSlice === true ? item.body : item.body.slice(0, 160)}
              {item.body.length > 173 && (
                <span
                  className="text-primary"
                  onClick={() => setTextSlice((prev) => !prev)}
                >
                  {textSlice === true ? "....Read Less" : ".....Read More"}
                </span>
              )}
            </footer>
          </blockquote>
        </div>
      </Div>
    </>
  );
};
