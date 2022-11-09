import { useRouter } from "next/router";
import React from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import HeaderLayout from "../../src/components/Layouts/HeaderLayout";

const NotFound = () => {
  const router = useRouter();
  return (
    <HeaderLayout>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="btn d-flex align-items-center m-4"
      >
        <CiCircleChevLeft size="1.4rem" />{" "}
        <div className="ms-2">Go Back to Home</div>
      </button>
      <h3 className="text-center">Page Not Found</h3>
    </HeaderLayout>
  );
};

export default NotFound;
