import { useSelector } from "react-redux";
import Link from "next/link";
import { CardComponent, Div, Ellipsis, FooterText } from "../../stylesJs/home";
import { useState } from "react";
import SearchBar from "../searchBar";
import { toTitleCase } from "../helper";
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
    <>Loading...</>
  ) : (
    <>
      <div className="container">
        <SearchBar
          search={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <h5 className="mt-5 mb-4">
          {search.length !== 0 &&
            `${filterDataFunction.length} results
          found`}
        </h5>
        <Div className="row">
          {filterDataFunction.map((item, index) => {
            return (
              <Div className="col-md-6 col-xl-4 col-sm-12">
                <Card key={item.id} item={item} />
              </Div>
            );
          })}
        </Div>
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
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <CardComponent
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsHover(true)}
        onFocusCapture={() => setIsHover(true)}
        className="card"
      >
        <div className="card-body">
          <Link href={`/post/${item.id}`}>
            <blockquote className="blockquote mb-0">
              <Ellipsis>
                {item.id}-{toTitleCase(item.title)}
              </Ellipsis>

              <FooterText>
                {item.body.slice(0, 70)}
                <span className="text-primary">....Read More</span>
              </FooterText>
            </blockquote>
          </Link>
        </div>
      </CardComponent>
    </>
  );
};
